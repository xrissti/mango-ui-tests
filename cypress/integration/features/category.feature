Feature: Womens shirts page

@automated
Scenario: Navigate to "Womens shirts" page via url
    Given the user navigates to the "Womens shirts" page
    Then the "Womens shirts" page should be displayed

@automated
Scenario: The user can open "Linen 100% shirt" product page 
    Given the user navigates to the "Womens shirts" page
    When the user clicks on the "Linen 100% shirt" product
    Then the "Linen 100% shirt" page should be displayed