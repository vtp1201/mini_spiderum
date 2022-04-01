const express = require('express');
const { checkLogged, checkNotLogged } = require('../app/middleware/authMiddleware')
const router = express.Router();

const AuthController = require('../app/controllers/AuthController');

module.exports = function (passport) {
    router.get('/logout', checkNotLogged, AuthController.logout);
    router.post('/login-user', checkLogged, AuthController.loginUser);
    router.post('/register-user', checkLogged, AuthController.declareUser);

    return router;
}
