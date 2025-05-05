const { default: mongoose } = require('mongoose');

const articleSchema = new mongoose.Schema({
	image: String,
	title: String,
	description: String,
	body: String,
	tags: [String],
	author: {},
	date: String,
});

const articleModel = mongoose.model('articles', articleSchema);

module.exports = articleModel;
