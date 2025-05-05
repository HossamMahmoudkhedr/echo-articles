const { default: Ajv } = require('ajv');

const ajv = new Ajv();

const articleSchema = {
	type: 'object',
	properties: {
		image: { type: 'string' },
		title: { type: 'string' },
		description: { type: 'string' },
		body: { type: 'string' },
		date: { type: 'string' },
		tags: { type: 'array', items: { type: 'string' } },
	},
	required: ['image', 'title', 'description', 'body'],
};

const articleValidate = ajv.compile(articleSchema);

module.exports = articleValidate;
