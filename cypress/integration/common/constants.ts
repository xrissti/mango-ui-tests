const cypressConfig = Cypress.config() as any;

export const PAGES: { [key: string]: any } = {
	'Main': {
		url: `${cypressConfig.baseUrl}`,
		resource: '',
		elements: ['title']
	},
	'Women shirts': {
		url: `${cypressConfig.baseUrl}`,
		resource: 'women/shirts_c78920337',
		elements: []
	}
}