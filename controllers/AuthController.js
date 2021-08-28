const User = require('../models/User');

class AuthController {
    index(req, res, next) {
        res.render('index');
    }

    login(req, res, next) {

    }
}

module.exports = new AuthController();
