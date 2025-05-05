const express = require('express');
const authenticateToken = require('../middlewares/authenticateToken');
const {
	addArticle,
	getAllArticles,
	getArticleData,
} = require('../controllers/articlesController');

const router = express.Router();

router.post('/add-article', authenticateToken, addArticle);

router.get('/', authenticateToken, getAllArticles);

router.get('/:id', authenticateToken, getArticleData);

module.exports = router;
