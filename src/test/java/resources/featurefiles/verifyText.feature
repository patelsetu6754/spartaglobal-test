Feature: Verify Message
  As a user I should be able to verify Message 'Become a Spartan'

  @Regression
  Scenario Outline: User Should be able to verify Message
    Given I am on homepage
    And I click on 'cookies'
    When I mouse hover and click on 'For individuals'
    Then I should be able to verify message "<message>"
    Then I should be able to verify message "<message1>"
    Then I should be able to verify message "<message2>"
    Examples:
      | message | message1 | message2 |
      | Become  | a        | Spartan  |