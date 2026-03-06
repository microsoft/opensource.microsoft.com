import { defineConfig } from '@playwright/test';

const port = Number(process.env.A11Y_PORT ?? 3200);
const shouldReuseExistingBuild = process.env.A11Y_USE_EXISTING_BUILD === '1';

export default defineConfig({
  testDir: './tests/a11y',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI
    ? [
        ['line'],
        ['html', { open: 'never' }],
      ]
    : 'list',
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    browserName: 'chromium',
    headless: true,
    trace: 'retain-on-failure',
  },
  webServer: {
    command: shouldReuseExistingBuild
      ? `npx serve out -l ${port}`
      : `npm run build && npx serve out -l ${port}`,
    port,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});