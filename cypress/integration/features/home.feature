Feature: Main page

@automated
@clearCookies
Scenario: Navigate to "Main" page
    Given the user navigates to the "Main" page
    When the user clicks the "Accept all" button
    And the user clicks the "English" link
    Then the "Main" page should be displayed

@automated
Scenario: The user can see Clothing menu on hover
    Given the user navigates to the "Main" page
    When the user hover the "Women" menu option
    Then the "Clothing" option is present

@automated
Scenario: Women shirt page via top Women menu
    Given the user navigates to the "Main" page
    When the user hovers "Women" and clicks "Clothing" -> "Shirts" option
    Then the "Women shirts" page should be displayed

@automated
Scenario: Women shirt page via bottom Women menu
    Given the user navigates to the "Main" page
    And the user clicks the "Women" button
    When the user scrolls to the "Women" bottom menu 
    And the user clicks "Shirts" option of the bottom menu
    Then the "Women shirts" page should be displayed