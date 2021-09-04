const express = require('express');
const { checkLogged, checkNotLogged } = require('../controllers/middleware/authMiddleware')
const router = express.Router();

const ArticleController = require('../controllers/ArticleController');

router.get('/:slug', ArticleController.show);
router.get('/create', ArticleController.create);
router.get('/:id/edit', ArticleController.edit);
router.post('/create-article', ArticleController.store);
router.put('/:id/edit-article', ArticleController.edit);
router.delete('/:id/delete', ArticleController.delete);

module.exports = router;