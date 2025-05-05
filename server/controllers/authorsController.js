require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorModel = require('../models/authrosModel');
const authorValidate = require('../validations/authorSchema');
const articleModel = require('../models/articleModel');
const articleValidate = require('../validations/articleSchema');

async function signup(req, res) {
	let body = { ...req.body, email: req.body.email.toLowerCase() };
	const isAuthorValid = authorValidate(body);
	if (!isAuthorValid) {
		return res.json({
			message:
				isAuthorValid.errors[0].instancePath.substring(0) +
				' ' +
				isAuthorValid.errors[0].message,
		});
	}

	const found = await authorModel.findOne({ email: body.email });

	if (found) {
		return res.json({ message: 'User Already exists' });
	}

	const salt = await bcrypt.genSalt(10);

	const hashPassword = await bcrypt.hash(body.password, salt);

	body.password = hashPassword;

	const newAuthor = await authorModel.create(body);
	let author = newAuthor.toObject();
	delete author.__v;

	res.json({
		message: 'You have been signed up successfully',
		user: author,
	});
}

async function login(req, res) {
	const body = req.body;

	const user = await authorModel.findOne({ email: body.email });

	if (!user)
		return res.status(404).json({ message: 'Email or password is worng!' });

	const isPasswordValid = await bcrypt.compare(body.password, user.password);

	if (!isPasswordValid)
		return res.status(404).json({ message: 'Email or password is worng!' });

	const token = jwt.sign(
		{ userId: user.id, email: user.email },
		process.env.JWT_SECRET
	);

	res.json({ message: 'You have been logged in successfully', token, user });
}

async function getAllAuthors(req, res) {
	const authros = await authorModel.find({}, { __v: 0 });
	res.json({ authros });
}

async function getAuthorData(req, res) {
	const { id } = req.params;
	const author = await authorModel.findOne({ _id: id }, { __v: 0 });

	if (!author) return res.status(404).json({ message: 'Author not found' });

	res.json({ message: 'Authro found', author });
}

module.exports = {
	signup,
	login,
	getAllAuthors,
	getAuthorData,
};
