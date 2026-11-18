import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';

const mainRoutes = [
  '/',
  '/collaborate/',
  '/projects/',
  '/contributions/',
  '/ecosystem/',
  '/program/',
  '/azure-credits/',
  '/codeofconduct/',
  '/codeofconduct/faq/',
  '/cla/',
  '/thanks/',
];

for (const route of mainRoutes) {
  test(`has no detectable accessibility violations for ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('main')).toBeVisible();
    await disableMotion(page);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(results.violations, formatViolations(results.violations)).toEqual([]);
  });
}

for (const route of ['/ecosystem/', '/contributions/']) {
  test(`contribution links have accessible names on ${route}`, async ({ page }) => {
    const contribution = {
      repoName: 'example',
      orgName: 'microsoft',
      created: '2026-01-01T00:00:00Z',
      actorLogin: 'contributor',
      actorAvatar: '',
      type: 'pull_request.opened',
      activityUrl: 'https://github.com/microsoft/example/pull/42',
    };

    await page.route('**/api/contributions', (apiRoute) => apiRoute.fulfill({
      json: {
        contributions: [
          { ...contribution, id: '1', title: 'Existing title', payload: { number: 42 } },
          { ...contribution, id: '2', payload: { number: 43, pull_request: { title: 'Nested title' } } },
          { ...contribution, id: '3', title: '  ', payload: { number: 44 } },
          { ...contribution, id: '4', type: 'issues.opened', payload: { number: 45 } },
          { ...contribution, id: '5', type: 'other', payload: {} },
        ],
      },
    }));
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.activity__title')).toHaveText([
      'Existing title',
      'Nested title',
      'Pull request #44 in microsoft/example',
      'Issue #45 in microsoft/example',
      'Contribution in microsoft/example',
    ]);

    const results = await new AxeBuilder({ page })
      .include('#contributionsFeed')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(results.violations, formatViolations(results.violations)).toEqual([]);
  });
}

function formatViolations(
  violations: Awaited<ReturnType<AxeBuilder['analyze']>>['violations'],
) {
  return violations
    .map((violation) => {
      const targets = violation.nodes
        .map((node) => node.target.join(' '))
        .join(', ');

      return `${violation.impact ?? 'unknown'} ${violation.id}: ${violation.help} (${targets})`;
    })
    .join('\n');
}

async function disableMotion(page: Page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
    `,
  });
}