Feature: Product page

@automated
Scenario: Navigate to "Linen 100% shirt" product page via url
    Given the user navigates to the "Linen 100% shirt" page
    Then the "Linen 100% shirt" page should be displayed

@automated
Scenario: The "Linen 100% shirt" price and colors are present
    Given the user navigates to the "Linen 100% shirt" page
    Then the "Linen 100% shirt" price "лв.69.99" should be present
    And the "Linen 100% shirt" colors are present
        |text               |
        |Off White selected |
        |Clementine         |
        |Khaki              |
        |Sky Blue           |

@automated
Scenario: The "Linen 100% shirt" sizes are present
    Given the user navigates to the "Linen 100% shirt" page
    When the user clicks "Choose your size" drop-down button
    Then the "Linen 100% shirt" sizes are present
        |text |
        |XXS  |
        |XS   |
        |S    |
        |M    |
        |L    |
        |XL   |
        |XXL  |