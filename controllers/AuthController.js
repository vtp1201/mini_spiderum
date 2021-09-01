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
    // register
    declareUser (req, res, next) {
        const user = new User(req.body);
        user
            .save()
            .then(() => res.redirect('/'))
            .catch(err => res.redirect('/auth/register'));
    }
    // logout
    logout (req, res, next) {
        req.session.destroy(() => res.redirect('/'));
    }
}

module.exports = new AuthController();
