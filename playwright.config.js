// @ts-check
import { defineConfig } from '@playwright/test';

const config = defineConfig({
  testDir: './tests',
  timeout: 70 * 1000,
  reporter: 'html',

  expect: {
    timeout: 40 * 1000,
  },

  use: {
    browserName: 'chromium',  // required
    channel: 'chrome',        // forces real Google Chrome
    headless: false           // optional (if you want UI)
  },
});

export default config;
