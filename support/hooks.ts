import {
  Before,
  After,
  Status,
  setDefaultTimeout
} from '@cucumber/cucumber';

import {
  chromium,
  Browser,
  Page
} from 'playwright';

setDefaultTimeout(60000);

let browser: Browser;

Before(async function () {

  browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  // Make page globally available
  this.page = page;
});

After(async function ({ result, pickle }) {

  const page: Page = this.page;

  // Screenshot on failure
  if (result?.status === Status.FAILED) {

    await page.screenshot({

      path: `reports/screenshots/${pickle.name}.png`,

      fullPage: true
    });

    console.log(
      `Screenshot captured for failed scenario: ${pickle.name}`
    );
  }

  await browser.close();
});