#@E2E
Feature: To validate the signin funcutionality of zulily application

  Background: 
    Given The user should be in Zulily login page

 @smoke
  Scenario: To validate the Sigin functionality of zulily application with invalid credentials
    When The user have to click the "Sigin" button
    And the user has to enter username and password in the field
      | username | userpassword |
      | kutti    |        12345 |
      | arun     |        22222 |
      | kumar    |        88888 |
    And The user have to click the "shopnow" button
    Then user can to see error message "errormsg" on the screen

  Scenario: To validate the Sigin functionality of zulily application with invalid credentials
    When The user have to click the "Sigi" button
    And the user has to enter username and password in the field
      | username | userpassword |
      | AAAAA    | 111111111111 |
      | BBBBB    | 222222222222 |
      | VVVVVVV  |   8888888888 |
      
    And The user have to click the "shopnow" button
    Then user can to see error message "address" on the screen
			