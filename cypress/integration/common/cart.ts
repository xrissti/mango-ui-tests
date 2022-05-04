import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('the pop up shopping bag is opened', () => {
  cy.get('#openedShoppingBag').should('exist').should('be.visible');
});

Then('the shopping bag contains {int} product', (productCount) => {
  cy.get('[data-testid="bag.title"]').should('contain', 'Shopping bag (' + productCount + ')').should('be.visible');
});

Then('the product price is {string} in the shopping bag', (price) => {
  cy.get('#openedShoppingBag').find('p').should('contain', price).should('exist').should('be.visible');
}); 

Then('the product color is {string} in the shopping bag', (colorName) => {
  cy.get('[data-testid="bag.item.info"]').find('p')
    .should('contain', colorName).should('exist').should('be.visible');
}); 

Then('the product size is {string} in the shopping bag', (sizeName) => {
  cy.get('[data-testid="bag.item.info"]').find('p')
    .should('contain', sizeName).should('exist').should('be.visible');
}); 