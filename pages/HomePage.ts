import { Page, expect } from '@playwright/test';

export class HomePage {

  constructor(private page: Page) {}

  async openWebsite() {

    await this.page.goto(
      'https://automationintesting.online/'
    );
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyHomepageLoaded() {

    await expect(this.page).toHaveURL(
      /automationintesting/
    );
  }
}