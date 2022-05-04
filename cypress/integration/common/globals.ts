import { When } from 'cypress-cucumber-preprocessor/steps';

When('the user scrolls to the {string} bottom menu', (menuName) => {
  cy.get('.vsv-title').should('contain', menuName).contains(menuName).scrollIntoView();
});
