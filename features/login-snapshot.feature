Feature: Login Snapshot
  As a QA engineer
  I want to visually validate the login page
  So that unintended UI changes are detected

  Background:
    Given I am on the Testarudo home page
    And I accept the cookies
    And I open the login section

  Scenario: Login form HTML matches the stored snapshot
    Then the login form HTML should match the stored "loginpage.html" snapshot

  Scenario: Login submit button matches the stored screenshot
    Then the login submit button should match the stored "loginpage.png" screenshot
