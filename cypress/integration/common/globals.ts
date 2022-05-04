import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('the user scrolls to the {string} bottom menu', (menuName) => {
  cy.get('.vsv-title').should('contain', menuName).contains(menuName).scrollIntoView();
});

When('the user clicks on the {string} product', () => {
  cy.get('#g2707710502').within(() => {
    cy.get('.product').click();
  });
});

Then('the {string} price {string} should be present', (productName, price) => {
  cy.getByText('.product-name', productName).closest('.product-features-prices')
    .find('.product-sale', price).should('exist').should('be.visible');
});

Then('the {string} colors are present', (productName, dataTable) => {
  dataTable.hashes().forEach(row => {
    cy.getByText('.product-name', productName).closest('.product-actions').find('.product-colors').within(() => {
      cy.get(`[aria-label="${row.text}"]`).should('exist').should('be.visible');
    });   
  });
});

Then('the {string} sizes are present', (productName, dataTable) => {
  cy.get('.selector-trigger').then(() => {
    dataTable.hashes().forEach(row => {
      cy.getByText('.product-name', productName).closest('.product-actions').find('#sizeSelector').within(() => {
        cy.get(`[data-size="${row.text}"]`).scrollIntoView().should('exist').should('be.visible');
      });
    });
  }); 
});

Then('the user selects the {string} color', (colorName) => {
  cy.get('#colorsContainer').find(`[aria-label="${colorName}"]`).click();
});