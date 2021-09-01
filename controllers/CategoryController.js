const Category = require('../models/Category');

class CategoryController {
    show(req, res, next) {
        res.render('');
    }

    create(req, res, next) {
        res.render('createCategory');
    }
}

module.exports = new CategoryController();
