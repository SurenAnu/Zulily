#@E2E
Feature: registation funcutionality to be check

  Background: 
    Given The user should be in Zulily login page

  @sanity  
  Scenario: to validate the registation funcutionality
    And The user have to click the "newmember" button
    When user enter the create the new email "email"id in the field
    And The user have to click the "emailclick" button
    And user able to enter the password in the field
      | password | 12345678 |
    And The user have to click the "passclick" button


