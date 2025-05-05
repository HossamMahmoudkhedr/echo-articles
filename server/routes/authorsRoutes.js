const express = require('express');
const {
	signup,
	getAllAuthors,
	login,
	getAuthorData,
} = require('../controllers/authorsController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/', authenticateToken, getAllAuthors);

router.get('/:id', authenticateToken, getAuthorData);

module.exports = router;
