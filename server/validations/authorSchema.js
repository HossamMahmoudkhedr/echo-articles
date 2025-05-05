const { default: Ajv } = require('ajv');

const ajv = new Ajv();

const authorSchema = {
	type: 'object',
	properties: {
		fname: { type: 'string', minLength: 3 },
		lname: { type: 'string', minLength: 3 },
		email: { type: 'string' },
		password: { type: 'string' },
		description: { type: 'string' },
		articles: { type: 'array', items: { type: 'string' } },
	},
	required: ['fname', 'lname', 'email', 'password'],
};

const authorValidate = ajv.compile(authorSchema);

module.exports = authorValidate;
