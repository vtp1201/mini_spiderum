const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');

router.get('/login', AuthController.login);
router.get('/register', AuthController.register);
router.post('/login-user', AuthController.loginUser);
router.post('/register-user', AuthController.declareUser);

module.exports = router;