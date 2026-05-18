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

  // Opens booking form
  readonly openBookingFormBtn: Locator;
  
  // Final booking confirmation
  readonly confirmReserveBtn: Locator;

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
    this.singleRoomBtn = page.locator('.room-card').nth(0)
      .getByRole('link', { name: 'Book now' });

    this.doubleRoomBtn = page.locator('.room-card').nth(1)
      .getByRole('link', { name: 'Book now' });

    this.suiteRoomBtn = page.locator('.room-card').nth(2)
      .getByRole('link', { name: 'Book now' });

    // First Reserve Now button
    this.openBookingFormBtn = page.getByRole('button', {
      name: /reserve now/i
    }).first();  

    // Opens booking details form
    this.openBookingFormBtn = page.getByRole('button', {
      name: /reserve now/i
    }).first();  

    // Booking form fields
    this.firstNameInput = page.getByPlaceholder('Firstname');

    this.lastNameInput = page.getByPlaceholder('Lastname');

    this.emailInput = page.getByPlaceholder('Email');

    this.phoneInput = page.getByPlaceholder('Phone');

  // Final Reserve Now button
  this.confirmReserveBtn = page.getByRole('button', {
    name: /reserve now|book|confirm/i
  }).last();  
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

  await this.singleRoomBtn.click();

  console.log('Correct single room selected');

  // Wait for booking form/modal
  await this.page.waitForTimeout(1000);
}


// ==============================
// Select Double Room
// ==============================

async selectDoubleRoom() {

  await this.doubleRoomBtn.waitFor({
    state: 'visible',
    timeout: 10000
  });

  await this.doubleRoomBtn.scrollIntoViewIfNeeded();

  await this.doubleRoomBtn.click();

  console.log('Correct double room selected');

  // Wait for booking form/modal
  await this.page.waitForTimeout(1000);
}


// ==============================
// Select Suite Room
// ==============================

async selectSuiteRoom() {

  await this.suiteRoomBtn.waitFor({
    state: 'visible',
    timeout: 10000
  });

  await this.suiteRoomBtn.scrollIntoViewIfNeeded();

  await this.suiteRoomBtn.click();

  console.log('Correct suite room selected');

  // Wait for booking form/modal
  await this.page.waitForTimeout(1000);
}

// ==============================
// Open Booking Form
// ==============================

async openBookingForm() {

  await this.openBookingFormBtn.waitFor({
    state: 'visible',
    timeout: 10000
  });

  await this.openBookingFormBtn.scrollIntoViewIfNeeded();

  await this.openBookingFormBtn.click({
    force: true
  });

  console.log('Booking form opened');

  await this.page.waitForTimeout(1000);
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
    timeout: 15000
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

    await this.confirmReserveBtn.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await this.confirmReserveBtn.click();

    console.log('Final booking confirmed');
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