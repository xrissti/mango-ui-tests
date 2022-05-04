import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('the user hover the {string} menu option', (menuText) => {
  cy.getByText('a > span', menuText).trigger('mouseover');
});

Then('the {string} option is present', (menuText) => {
  cy.get('#sheSubMenu span').should('contain', menuText).should('exist').should('be.visible');
});

When('the user hovers {string} and clicks {string} -> {string} option', (menuText, menuText1, menuText2) => {
	cy.getByText('a > span', menuText).trigger('mouseover').then(() => {
		cy.get('#sheSubMenu span').should('contain', menuText1)
			.find('span').should('contain', menuText2).contains(menuText2).click();
	});
});

When('the user clicks {string} option of the bottom menu', (menuText) => {
  cy.get('.vsv-link > span').should('contain', menuText).contains(menuText).click();
});

When('the user clicks "Choose your size" drop-down button', () => {
  cy.get('#sizeSelector').click();
});

When('the user selects the {string} menu option', (menuText) => {
  cy.get('#sizeSelector').click().then(() => {
    cy.get(`[data-size="${menuText}"]`).click({multiple: true});
  })
});
