import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 20000,

  retries: 1,

  reporter: 'html',

  use: {

    baseURL: 'https://automationintesting.online/',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry'
  }

});