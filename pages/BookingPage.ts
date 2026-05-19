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

  // Room Quantity
  readonly roomQuantity: Locator;

  // Booking form fields
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;

  // Booking buttons
  readonly openBookingFormBtn: Locator;
  readonly confirmReserveBtn: Locator;

  constructor(page: Page) {

    this.page = page;

    // ==============================
    // Date fields
    // ==============================

    this.checkIn = page.locator('input').first();

    this.checkOut = page.locator('input').nth(1);

    // ==============================
    // Check availability
    // ==============================

    this.checkAvailabilityBtn = page.getByRole('button', {
      name: /check availability/i
    });

    // ==============================
    // Room selection buttons
    // ==============================

    this.singleRoomBtn = page
      .locator('.room-card')
      .nth(0)
      .getByRole('link', {
        name: /book now/i
      });

    this.doubleRoomBtn = page
      .locator('.room-card')
      .nth(1)
      .getByRole('link', {
        name: /book now/i
      });

    this.suiteRoomBtn = page
      .locator('.room-card')
      .nth(2)
      .getByRole('link', {
        name: /book now/i
      });

    // ==============================
    // Room Quantity Locator
    // ==============================

    this.roomQuantity = page.locator('#roomQuantity');

    // ==============================
    // First Reserve Now button
    // Opens booking form
    // ==============================

    this.openBookingFormBtn = page
      .getByRole('button', {
        name: /reserve now/i
      })
      .first();

    // ==============================
    // Booking form fields
    // ==============================

    this.firstNameInput = page.getByPlaceholder('Firstname');

    this.lastNameInput = page.getByPlaceholder('Lastname');

    this.emailInput = page.getByPlaceholder('Email');

    this.phoneInput = page.getByPlaceholder('Phone');

    // ==============================
    // Final Reserve Now button
    // Confirms booking
    // ==============================

    this.confirmReserveBtn = page
      .getByRole('button', {
        name: /reserve now/i
      })
      .last();
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

    await this.page.waitForTimeout(2000);
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

    await this.page.waitForTimeout(2000);
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

    await this.page.waitForTimeout(2000);
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

    await this.page.waitForTimeout(2000);
  }

  // ==============================
  // Dynamic Room Selector
  // ==============================

  async selectDynamicRoom(roomType: string) {

    switch(roomType.toLowerCase()) {

      case 'single':

        await this.selectRoom();

        break;

      case 'double':

        await this.selectDoubleRoom();

        break;

      case 'suite':

        await this.selectSuiteRoom();

        break;

      default:

        throw new Error(
          `Invalid room type: ${roomType}`
        );
    }
  }

  // ==============================
  // Select Room Quantity
  // ==============================

  async selectRoomQuantity(quantity: number) {

    // Temporary implementation
    // Replace with actual locator logic later

    console.log(
      `Room quantity selected: ${quantity}`
    );

    await this.page.waitForTimeout(1000);
  }

  // ==============================
  // Complete Booking Method
  // ==============================

  async completeBooking(
    roomType: string,
    checkIn: string,
    checkOut: string,
    quantity: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string
  ) {

    await this.selectDates(
      checkIn,
      checkOut
    );

    await this.selectDynamicRoom(
      roomType
    );

    await this.selectRoomQuantity(
      quantity
    );

    await this.openBookingForm();

    await this.fillBookingDetails(
      firstname,
      lastname,
      email,
      phone
    );

    await this.confirmBooking();

    await this.verifyBookingSuccess();
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

    await this.openBookingFormBtn.click();

    console.log('Booking form opened');

    await this.page.waitForTimeout(2000);
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

    await this.firstNameInput.fill(firstname);

    await this.lastNameInput.fill(lastname);

    await this.emailInput.fill(email);

    await this.phoneInput.fill(phone);

    console.log('Booking details filled');

    await this.page.waitForTimeout(1000);
  }

  // ==============================
  // Confirm Booking
  // ==============================

  async confirmBooking() {

    await this.confirmReserveBtn.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await this.confirmReserveBtn.scrollIntoViewIfNeeded();

    await this.confirmReserveBtn.click();

    console.log('Final booking confirmed');

    // Wait for success page
    await this.page.waitForTimeout(5000);
  }

  // ==============================
  // Verify Booking Success
  // ==============================

  async verifyBookingSuccess() {

    await expect(
      this.page.locator('body')
    ).toContainText(/booking confirmed/i);

    console.log('Booking Successful');
  }
}