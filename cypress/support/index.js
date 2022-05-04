// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

afterEach(() => {
	let str = [];
	cy.getCookies().then((cookies) => {
		cy.log(cookies);
		for (let l = 0; l < cookies.length; l++) {
			if (cookies.length > 0 && l == 0) {
				str[l] = cookies[l].name;
				Cypress.Cookies.preserveOnce(str[l]);
			} else if (cookies.length > 1 && l > 1) {
				str[l] = cookies[l].name;
				Cypress.Cookies.preserveOnce(str[l]);
			}
		}
	});
});