# Hotel Booking Automation Framework

End-to-end automation testing framework for hotel booking workflow using Playwright, TypeScript, and Cucumber BDD.

This framework automates the complete hotel booking process including:
- Selecting booking dates
- Selecting room types
- Opening booking form
- Filling guest details
- Confirming booking
- Verifying booking success

---

# Tech Stack

- Playwright
- TypeScript
- Cucumber BDD
- Node.js

---

# Framework Architecture

This project follows:

- Page Object Model (POM)
- Behavior Driven Development (BDD)
- Data-Driven Testing
- Modular Framework Design

---

# Features

- End-to-end booking automation
- BDD feature files with Gherkin syntax
- Multiple room booking scenarios
- Tag-based execution
- Data-driven test execution
- Screenshot capture on failure
- Reusable page methods
- Scalable automation architecture
- Console execution logs
- Playwright automation support
- Cucumber reporting support

---

# Project Structure

```plaintext
Hotel-Booking-Automation/
│
├── features/
│   └── booking.feature
│
├── step-definitions/
│   └── bookingSteps.ts
│
├── pages/
│   ├── HomePage.ts
│   └── BookingPage.ts
│
├── support/
│   └── hooks.ts
│
├── assets/
│   └── bookingData.json
│
├── reports/
│   └── screenshots/
│
├── package.json
├── cucumber.js
├── tsconfig.json
├── .gitignore
└── README.md  

Commands Used for Execution
Run Complete Framework
npm test

Run Specific Scenario by Tag
Single Room
npm test -- --tags "@singleRoom"
Double Room
npm test -- --tags "@doubleRoom"
Suite Room
npm test -- --tags "@suiteRoom"

Run Specific Test Case ID
TC_001
npm test -- --tags "@TC_001"
TC_002
npm test -- --tags "@TC_002"
TC_003
npm test -- --tags "@TC_003"