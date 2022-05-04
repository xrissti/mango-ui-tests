import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('the user clicks the {string} link', (linkText) => {
  cy.getElementByText('a', linkText).click({ force: true });
});
