import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { PAGES } from './constants';

Given('the user navigates to the {string} page', (pageName: string) => {
  cy.visit(PAGES[pageName].url).then(() => {
    cy.get('button', { timeout: 60000 }).should('contain', 'Accept all').contains('Accept all').click();
  });
});

Then('the {string} page should be displayed', (pageName) => {
  cy.url().should('contain', PAGES[pageName].resource);
	waitForPageToLoad(pageName);
});

export function waitForPageToLoad(pageName: string) {
  const page = PAGES[pageName];
  page.elements.forEach((locator: string) => {
    cy.get(locator).should('exist');
  });
}