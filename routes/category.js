const express = require('express');
const { checkLogged, checkNotLogged } = require('../controllers/middleware/authMiddleware')
const router = express.Router();

const CategoryController = require('../controllers/CategoryController');

router.get('/:slug', CategoryController.show);
router.get('/create', CategoryController.create);


module.exports = router;