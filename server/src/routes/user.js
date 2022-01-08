const express = require('express');
const { checkLogged, checkNotLogged } = require('../app/middleware/authMiddleware')
const router = express.Router();

const UserController = require('../app/controllers/UserController');

router.get('/:slug', UserController.show);
router.get('/edit-profile', UserController.showEdit);

module.exports = router;
