const express = require('express');
const authenticateToken = require('../middlewares/authenticateToken');
const {
	addArticle,
	editArticle,
	getAllArticles,
	getArticleData,
	searchArticle,
	deleteArticle,
} = require('../controllers/articlesController');

const router = express.Router();

router.post('/add-article', authenticateToken, addArticle);

router.post('/edit-article/:id', authenticateToken, editArticle);

router.get('/delete-article/:id', authenticateToken, deleteArticle);

router.get('/search', searchArticle);
router.get('/', getAllArticles);

router.get('/:id', getArticleData);

module.exports = router;
