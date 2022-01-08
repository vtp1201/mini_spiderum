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
        User.findById(req.session.userId)
            .then( user => 
                res.render('users/editProfile', {
                    user: mongooseToObject(user),
                })
            )
            .catch(next);
    }
    // [PUT] user/user-edit-profile
    edit(req, res, next) {
        User.findByIdAndUpdate(req.session.userId, req.body)
            .then( () => 
                res.redirect('/user/edit-profile')
            )
            .catch(next);
    }
    // [PATCH] user/following
    follow(req, res, next) {
        
    }

};

module.exports = new UserController();
