Feature: Add product to the shopping bag

@automated
Scenario: Add "Linen 100% shirt" product to the shopping bag
    Given the user navigates to the "Linen 100% shirt" page
    And the user selects the "Khaki" color
    And the user clicks "Choose your size" drop-down button
    And the user selects the "S" menu option
    When the user clicks the "Add to shopping bag" button
    Then the pop up shopping bag is opened
    And the shopping bag contains 1 product
    And the product price is "лв.69,99" in the shopping bag
    And the product color is "Khaki" in the shopping bag 
    And the product size is "S" in the shopping bag 

