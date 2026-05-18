Feature: Hotel Booking Functionality

  @TC_001
  @smoke
  @booking

  Scenario: Successful room booking

    Given We open hotel website

    When We select single room booking dates

    And We select single room

    And We open booking form

    And We enter valid booking details

    And We confirm booking

    Then Booking should be successful

  @TC_002
  @smoke
  @doubleRoom

  Scenario: Successful double room booking

    Given We open hotel website

    When We select double room booking dates

    And We select double room

    And We open booking form

    And We enter valid booking details

    And We confirm booking

    Then Booking should be successful


  @TC_003
  @smoke
  @suiteRoom

  Scenario: Successful suite room booking

    Given We open hotel website

    When We select suite room booking dates

    And We select suite room

    And We open booking form

    And We enter valid booking details

    And We confirm booking

    Then Booking should be successful  