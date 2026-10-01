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