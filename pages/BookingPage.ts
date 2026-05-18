import { Page, Locator, expect } from '@playwright/test';

export class BookingPage {

  readonly page: Page;

  // Date fields
  readonly checkIn: Locator;
  readonly checkOut: Locator;

  // Availability button
  readonly checkAvailabilityBtn: Locator;

  // Room buttons
  readonly singleRoomBtn: Locator;
  readonly doubleRoomBtn: Locator;
  readonly suiteRoomBtn: Locator;

  // Booking form fields
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;

  // Reserve button
  readonly reserveBtn: Locator;

  constructor(page: Page) {

    this.page = page;

    // Check-in & Check-out fields
    this.checkIn = page.locator('input').first();

    this.checkOut = page.locator('input').nth(1);

    // Check Availability button
    this.checkAvailabilityBtn = page.getByRole('button', {
      name: /check availability/i
    });

    // Room selection buttons
    this.singleRoomBtn = page.locator('text=Book now').nth(0);

    this.doubleRoomBtn = page.locator('text=Book now').nth(1);

    this.suiteRoomBtn = page.locator('text=Book now').nth(2);

    // Booking form fields
    this.firstNameInput = page.locator('.room-firstname');

    this.lastNameInput = page.locator('.room-lastname');

    this.emailInput = page.locator('.room-email');

    this.phoneInput = page.locator('.room-phone');

    // Reserve button
    this.reserveBtn = page.getByRole('button', {
      name: /reserve now|book|confirm/i
    });
  }

  // ==============================
  // Select Booking Dates
  // ==============================

  async selectDates(
    checkInDate: string,
    checkOutDate: string
  ) {

    await this.checkIn.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await this.checkIn.fill(checkInDate);

    await this.checkOut.fill(checkOutDate);

    await this.checkAvailabilityBtn.click();

    console.log('Dates selected successfully');
  }

  // ==============================
  // Select Single Room
  // ==============================

  async selectRoom() {

    await this.singleRoomBtn.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await this.singleRoomBtn.scrollIntoViewIfNeeded();

    // Small pause before click
    await this.page.waitForTimeout(1000);

    await this.singleRoomBtn.click();

    console.log('Book now clicked');

    // Wait for booking form popup
    await this.page.waitForTimeout(3000);
  }

  // ==============================
  // Select Double Room
  // ==============================

  async selectDoubleRoom() {

    await this.doubleRoomBtn.waitFor({
      state: 'visible'
    });

    await this.doubleRoomBtn.scrollIntoViewIfNeeded();

    await this.doubleRoomBtn.click();

    await this.page.waitForTimeout(3000);
  }

  // ==============================
  // Select Suite Room
  // ==============================

  async selectSuiteRoom() {

    await this.suiteRoomBtn.waitFor({
      state: 'visible'
    });

    await this.suiteRoomBtn.scrollIntoViewIfNeeded();

    await this.suiteRoomBtn.click();

    await this.page.waitForTimeout(3000);
  }

  // ==============================
  // Fill Booking Details
  // ==============================

  async fillBookingDetails(
    firstname: string,
    lastname: string,
    email: string,
    phone: string
  ) {

    await this.firstNameInput.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await this.firstNameInput.scrollIntoViewIfNeeded();

    await this.firstNameInput.fill(firstname);

    await this.lastNameInput.fill(lastname);

    await this.emailInput.fill(email);

    await this.phoneInput.fill(phone);

    console.log('Booking details filled');
  }

  // ==============================
  // Confirm Booking
  // ==============================

  async confirmBooking() {

    await this.reserveBtn.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await this.reserveBtn.scrollIntoViewIfNeeded();

    await this.reserveBtn.click();

    console.log('Reserve now clicked');
  }

  // ==============================
  // Verify Booking Success
  // ==============================

  async verifyBookingSuccess() {

    await expect(
      this.page.locator('body')
    ).toContainText(
      /booking confirmed|booking successful|reservation/i
    );

    console.log('Booking successful');
  }
}