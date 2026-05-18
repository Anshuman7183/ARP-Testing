import {
  Given,
  When,
  Then
} from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

import { BookingPage } from '../pages/BookingPage';

import bookingData from '../fixtures/bookingData.json';

let homePage: HomePage;

let bookingPage: BookingPage;


// ====================== GIVEN ======================

Given(
  'User opens the hotel website',

  async function () {

    homePage = new HomePage(this.page);

    bookingPage = new BookingPage(this.page);

    console.log('Opening Website');

    await homePage.openWebsite();

    await homePage.verifyHomepageLoaded();

    console.log('Homepage Loaded');
  }
);


// ====================== WHEN ======================

When(
  'User selects valid booking dates',

  async function () {

    console.log('Selecting Dates');

    await bookingPage.selectDates(
      bookingData.arrival,
      bookingData.departure
    );
  }
);


When(
  'User selects a room',

  async function () {

    console.log('Selecting Room');

    await bookingPage.selectRoom();
  }
);


When(
  'User enters valid booking details',

  async function () {

    console.log('Filling Booking Details');

    await bookingPage.fillBookingDetails(
      bookingData.firstname,
      bookingData.lastname,
      bookingData.email,
      bookingData.phone
    );
  }
);


When(
  'User clicks reserve now button',

  async function () {

    console.log('Clicking Reserve Now');

    await bookingPage.confirmBooking();
  }
);


// ====================== THEN ======================

Then(
  'Booking should be successful',

  async function () {

    console.log('Verifying Booking Success');

    await bookingPage.verifyBookingSuccess();

    console.log('Booking Successful');
  }
);