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

	const found = await authorModel.findOne({ email: body.email.toLowerCase() });

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

	const user = await authorModel.findOne({ email: body.email.toLowerCase() });

	if (!user)
		return res.status(404).json({ message: 'Email or password is worng!' });

	const isPasswordValid = await bcrypt.compare(body.password, user.password);

	if (!isPasswordValid)
		return res.status(404).json({ message: 'Email or password is worng!' });

	const token = jwt.sign(
		{ userId: user.id, email: user.email },
		process.env.JWT_SECRET,
		{ expiresIn: '30d' }
	);

	res.cookie('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 30 * 24 * 60 * 60 * 1000,
	});

	res.cookie('loggedIn', true, {
		httpOnly: false,
		secure: false,
		maxAge: 30 * 24 * 60 * 60 * 1000,
	});

	res.json({ message: 'You have been logged in successfully', user });
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

function logOut(req, res) {
	res.clearCookie('token', {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
	});
	res.clearCookie('loggedIn');
	res.json({ message: 'You have been logged out!' });
}

module.exports = {
	signup,
	login,
	logOut,
	getAllAuthors,
	getAuthorData,
};
