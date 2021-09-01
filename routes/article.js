const express = require('express');
const { checkLogged, checkNotLogged } = require('../controllers/middleware/authMiddleware')
const router = express.Router();

const ArticleController = require('../controllers/ArticleController');

router.get('/:slug', ArticleController.show);
router.get('/create', ArticleController.create);

module.exports = router;