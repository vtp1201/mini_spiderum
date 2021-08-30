const bcrypt = require('bcrypt');
const User = require('../models/User');

class AuthController {
    // render login page
    login(req, res, next) {
        res.render('login');
    }
    // render register page
    register(req, res, next) {
        res.render('register');
    }
    // login
    loginUser (req, res, next) {
        const { username, password } = req.body;
        console.log(req.body);
        User.findOne({username: username}, (err, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, same) => {
                    if (same) {
                        req.Session.userID = user.id;
                        res.redirect('/');
                    } else {
                        res.redirect('/auth/login');
                    }
                });
            } else {
                res.redirect('/auth/login');
            }
        });
    }
    // register
    declareUser (req, res, next) {
        User.create(req.body, (err, user) => {
            if (err) {
                res.redirect('/auth/register');
                console.log(err);
                return;
            }
            res.redirect('/');
        });
    }
}

module.exports = new AuthController();
