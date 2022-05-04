import { Before } from 'cypress-cucumber-preprocessor/steps';
import { parseTags, hasTag } from '../common/utils';

Before(() => {
	const tags = parseTags();
  cy.wrap(tags).as('tags');


	if (hasTag(tags, 'clearCookies')) {
		cy.clearCookies();
	}
});

