const bcrypt = require('bcrypt');
const User = require('../models/User');

class AuthController {
    // [GET] auth/login
    login(req, res, next) {
        res.render('users/login');
    }
    // [GET] auth/register
    register(req, res, next) {
        res.render('users/register');
    }
    // [POST] auth/login-user
    loginUser (req, res, next) {
        const { username, password } = req.body;
        User.findOne({username: username}, (err, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, same) => {
                    if (same) {
                        req.session.userId = user._id;
                        res.redirect('/');
                        return;
                    }
                    res.redirect('/auth/login');
                });
                return;  
            }
            res.redirect('/auth/login');       
        });
    }
    // [POST] auth/register-user
    declareUser (req, res, next) {
        const user = new User(req.body);
        user
            .save()
            .then(() => res.redirect('/'))
            .catch(err => res.redirect('/auth/register'));
    }
    // [GET] auth/logout
    logout (req, res, next) {
        req.session.destroy(() => res.redirect('/'));
    }
}

module.exports = new AuthController();
