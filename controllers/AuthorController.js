const User = require('../models/User');
const { mongooseToObject } = require('../util/mongoose');

class AuthorController {
    // show profile user
    show(req, res, next) {
        User.findOne( {slug: req.params.slug} )
            .then( user => 
                res.render('users/profile', {
                    user: mongooseToObject(user),
                })    
            )
    }
}

module.exports = new AuthorController();
