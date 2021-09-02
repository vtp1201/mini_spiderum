const express = require('express');
const { checkLogged, checkNotLogged } = require('../controllers/middleware/authMiddleware')
const router = express.Router();

const AuthorController = require('../controllers/AuthorController');

router.get('/:slug', AuthorController.show);

module.exports = router;
