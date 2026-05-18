import {
  Given,
  When,
  Then
} from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

import { BookingPage } from '../pages/BookingPage';

import bookingData from '../assets/bookingData.json';

let testData: any;

let homePage: HomePage;

let bookingPage: BookingPage;


// ====================== GIVEN ======================

Given(

  'We open hotel website',

  async function () {

    const page = this.page;

    homePage = new HomePage(page);

    bookingPage = new BookingPage(page);

    console.log('Opening Website');

    await homePage.openWebsite();

    await homePage.verifyHomepageLoaded();

    console.log('Homepage Loaded');
  }
);


// ====================== SINGLE ROOM DATES ======================

When(
  'We select single room booking dates',

  async function () {

    testData = bookingData.TC_001;

    console.log('Selecting Dates');

    await bookingPage.selectDates(
      testData.arrival,
      testData.departure
    );

    console.log('Dates selected successfully');
  }
);


// ====================== DOUBLE ROOM DATES ======================

When(
  'We select double room booking dates',

  async function () {

    testData = bookingData.TC_002;

    console.log('Selecting Dates');

    await bookingPage.selectDates(
      testData.arrival,
      testData.departure
    );

    console.log('Dates selected successfully');
  }
);


// ====================== SUITE ROOM DATES ======================

When(
  'We select suite room booking dates',

  async function () {

    testData = bookingData.TC_003;

    console.log('Selecting Dates');

    await bookingPage.selectDates(
      testData.arrival,
      testData.departure
    );

    console.log('Dates selected successfully');
  }
);


// ====================== ROOM SELECTION ======================

When(
  'We select single room',

  async function () {

    testData = bookingData.TC_001;

    console.log('Selecting Single Room');

    await bookingPage.selectRoom();
  }
);


When(
  'We select double room',

  async function () {

    testData = bookingData.TC_002;

    console.log('Selecting Double Room');

    await bookingPage.selectDoubleRoom();
  }
);


When(
  'We select suite room',

  async function () {

    testData = bookingData.TC_003;

    console.log('Selecting Suite Room');

    await bookingPage.selectSuiteRoom();
  }
);

When(
  'We open booking form',

  async function () {

    console.log('Opening booking form');

    await bookingPage.openBookingForm();
  }
);


When(
  'We enter valid booking details',

  async function () {

    console.log('Filling Booking Details');

    await bookingPage.fillBookingDetails(
      testData.firstname,
      testData.lastname,
      testData.email,
      testData.phone
    );
  }
);


When(
  'We confirm booking',

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