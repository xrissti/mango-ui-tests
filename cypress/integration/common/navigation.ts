import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { PAGES } from './constants';

Given('the user navigates to the {string} page', (pageName: string) => {
	cy.visit(PAGES[pageName].url);
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