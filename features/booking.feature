Feature: Hotel Booking

  @smoke
  Scenario: Successful room booking

    Given User opens the hotel website

    When User selects valid booking dates

    And User selects a room

    And User enters valid booking details

    And User clicks reserve now button

    Then Booking should be successful