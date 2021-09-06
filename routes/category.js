const express = require('express');
const { checkAdmin } = require('../controllers/middleware/authMiddleware')
const router = express.Router();

const CategoryController = require('../controllers/CategoryController');

router.get('/:slug', checkAdmin, CategoryController.show);
router.get('/create', checkAdmin, CategoryController.create);
router.post('/store', checkAdmin, CategoryController.store);
router.get('/:id/edit', checkAdmin, CategoryController.edit);
router.put(':id/edit-category', checkAdmin, CategoryController.update);


module.exports = router;