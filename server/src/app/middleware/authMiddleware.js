const User = require('../models/User');

module.exports = {
    checkNotLogged: (req, res, next) => {
        User.findById(req.session.userId, (err, user) => {
            if (err || !user) {
                return res.redirect('/');
            }
            next();
        });
    },
    checkLogged: (req, res, next) => {
        if (req.session.userId) {
            return res.redirect('/');
        }
        next();
    },
    checkAdmin: (req, res, next) => {
        User.findById(req.session.userId, (err, user) => {
            if (err || user.role !== 'admin') {
                return res.redirect('back');
            }
            next();
        });
    },
};