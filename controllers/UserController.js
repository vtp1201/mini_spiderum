const User = require('../models/User');
const { mongooseToObject } = require('../util/mongoose');

class UserController {
    // [GET] user/:slug
    show(req, res, next) {
        User.findOne( {slug: req.params.slug} )
            .then( user => 
                res.render('users/profile', {
                    user: mongooseToObject(user),
                })    
            )
            .catch(next);
    }
    // [GET] user/edit-profile
    showEdit(req, res, next) {
        res.render('/users/editProfile');
    }
};

module.exports = new UserController();
