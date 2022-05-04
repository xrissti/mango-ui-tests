import { When } from 'cypress-cucumber-preprocessor/steps';

When('the user clicks the {string} button', (buttonName) => {
  cy.getByText('button, .vsv-button', buttonName).click();
});