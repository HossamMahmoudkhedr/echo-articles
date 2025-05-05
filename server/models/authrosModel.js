const { default: mongoose } = require('mongoose');

const authorSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	email: String,
	password: String,
	description: String,
	articles: [],
});

const authorModel = mongoose.model('authors', authorSchema);

module.exports = authorModel;
