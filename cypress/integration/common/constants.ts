const cypressConfig = Cypress.config() as any;

export const PAGES: { [key: string]: any } = {
	'Main': {
		url: `${cypressConfig.baseUrl}/bg-en`,
		resource: '',
		elements: ['title']
	},
	'Womens shirts': {
		url: `${cypressConfig.baseUrl}/bg-en/women/shirts_c78920337`,
		resource: '/women/shirts_c78920337',
		elements: ['h1']
	},
	'Linen 100% shirt': {
		url: `${cypressConfig.baseUrl}/bg-en/women/shirts-shirts/linen-100-shirt_27077105.html`,
		resource: '/women/shirts-shirts/linen-100-shirt_27077105.html',
		elements: ['h1']
	}
}