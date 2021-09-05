const express = require('express');
const { checkLogged, checkNotLogged } = require('../controllers/middleware/authMiddleware')
const router = express.Router();

const CategoryController = require('../controllers/CategoryController');

router.get('/:slug', CategoryController.show);
router.get('/create', CategoryController.create);
router.post('/store', CategoryController.store);
router.get('/:id/edit', CategoryController.edit);
router.put(':id/edit-category', CategoryController.update);


module.exports = router;