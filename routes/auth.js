const express = require('express');
const { checkLogged, checkNotLogged } = require('../controllers/middleware/authMiddleware')
const router = express.Router();

const AuthController = require('../controllers/AuthController');

router.get('/login', checkLogged, AuthController.login);
router.get('/register', checkLogged, AuthController.register);
router.get('/logout', checkNotLogged, AuthController.logout);
router.post('/login-user', checkLogged, AuthController.loginUser);
router.post('/register-user', checkLogged, AuthController.declareUser);

module.exports = router;