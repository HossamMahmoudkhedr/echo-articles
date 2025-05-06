const authorModel = require('../models/authrosModel');
const articleModel = require('../models/articleModel');
const articleValidate = require('../validations/articleSchema');

async function addArticle(req, res) {
	const body = req.body;
	const { user_id, ...articleData } = body;

	const isArticleValid = articleValidate(articleData);

	if (!isArticleValid)
		return res.json({
			message:
				isArticleValid.errors[0].instancePath.substring(0) +
				' ' +
				isArticleValid.errors[0].message,
		});

	const user = await authorModel.findById(user_id);
	if (!user)
		return res.status(404).json({ message: 'User not found. try to login' });

	const userObj = user.toObject();
	delete userObj.password;
	delete userObj.__v;
	delete userObj.articles;
	const newArticle = await articleModel.create({
		...articleData,
		author: userObj,
	});

	user.articles.push(newArticle);
	await user.save();

	const article = newArticle.toObject();
	delete article.__v;
	res.json({ message: 'Article has been added successfully', article });
}

async function editArticle(req, res) {
	const { id } = req.params;
	const body = req.body;
	const isArticleValid = articleValidate(body);

	if (!isArticleValid)
		return res.json({
			message:
				isArticleValid.errors[0].instancePath.substring(0) +
				' ' +
				isArticleValid.errors[0].message,
		});

	const article = await articleModel.findOne({ _id: id });

	if (!article) return res.json({ message: 'Article not found' });

	article.image = body.image;
	article.title = body.title;
	article.description = body.description;
	article.body = body.body;
	article.tags = body.tags;

	await article.save();

	res.json({ message: 'Article has been updated successfully', article });
}

async function getAllArticles(req, res) {
	const articles = await articleModel.find({}, { __v: 0 });
	res.json({ articles });
}

async function getArticleData(req, res) {
	const { id } = req.params;
	const article = await articleModel.findOne({ _id: id }, { __v: 0 });

	if (!article) return res.status(404).json({ message: 'Article not found' });

	res.json({ message: 'Article found', article });
}

async function deleteArticle(req, res) {
	const { id } = req.params;

	const article = await articleModel.findOne({ _id: id });

	if (!article) return res.json({ message: 'Article not found' });

	await articleModel.deleteOne({ _id: id });

	res.json({ message: 'Article has been deleted successfully' });
}

module.exports = {
	addArticle,
	editArticle,
	getAllArticles,
	getArticleData,
	deleteArticle,
};
