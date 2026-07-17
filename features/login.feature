Feature: Login in Testarudo platform
  As a user of the Testarudo platform
  I want to log in with my credentials
  So that I can access my corresponding panel (Admin or Student)

  Background:
    Given I am on the Testarudo home page
    And I accept the cookies
    And I open the login section

  Scenario Outline: Successful login shows the correct panel
    When I log in as "<role>"
    Then I should see the "<role>" panel

    Examples:
      | role    |
      | admin   |
      | student |

  Scenario Outline: Successful login redirects to the correct URL
    When I log in as "<role>"
    Then I should be redirected to the "<role>" URL

    Examples:
      | role    |
      | admin   |
      | student |

  Scenario: Admin panel contains the welcome message
    When I log in as "admin"
    Then the admin panel heading should contain the text "Panel de administración"
