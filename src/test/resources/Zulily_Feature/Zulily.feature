Feature: To validate the signin funcutionality of zulily application

Scenario: To validate the Sigin functionality of zulily application with invalid credentials
Given The user should be in Zulily login page
When The user have to click the Sigin button
And the user has to enter username and password in the field
|username|userpassword|
|kutti|12345|
|arun|22222|
|kumar|88888|

And then user click the shop now button
Then user can to see error message on the screen

