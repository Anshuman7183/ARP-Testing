Feature: Hotel Booking Functionality


# ======================================================
# SINGLE ROOM BOOKING
# ======================================================

@smoke
@regression
@singleRoom
@TC_001
@booking

Scenario: Successful single room booking

Given We open hotel website

When We select single room booking dates

And We select single room

And We open booking form

And We enter valid booking details

And We confirm booking

Then Booking should be successful



# ======================================================
# DOUBLE ROOM BOOKING
# ======================================================

@regression
@doubleRoom
@TC_002

Scenario: Successful double room booking

Given We open hotel website

When We select double room booking dates

And We select double room

And We open booking form

And We enter valid booking details

And We confirm booking

Then Booking should be successful



# ======================================================
# SUITE ROOM BOOKING
# ======================================================

@regression
@suiteRoom
@TC_003

Scenario: Successful suite room booking

Given We open hotel website

When We select suite room booking dates

And We select suite room

And We open booking form

And We enter valid booking details

And We confirm booking

Then Booking should be successful