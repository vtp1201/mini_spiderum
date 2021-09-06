const express = require('express');
const { checkLogged } = require('../controllers/middleware/authMiddleware')
const router = express.Router();

const ArticleController = require('../controllers/ArticleController');

router.get('/:slug', checkLogged, ArticleController.show);
router.get('/create', checkLogged, ArticleController.create);
router.get('/:id/edit', checkLogged, ArticleController.edit);
router.post('/create-article', checkLogged, ArticleController.store);
router.put('/:id/edit-article', checkLogged, ArticleController.edit);
router.delete('/:id/delete', checkLogged, ArticleController.delete);
router.delete('/:id/force', checkLogged, ArticleController.destroy);
router.patch('/:id/force', checkLogged, ArticleController.restore);

module.exports = router;