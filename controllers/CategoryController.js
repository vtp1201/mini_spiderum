const Category = require('../models/Category');

class CategoryController {
    show(req, res, next) {
        res.render('');
    }
    // [GET] category/create
    create(req, res, next) {
        res.render('createCategory');
    }
    //[POST] category/store
    store(req, res, next) {
        const category = new Category(req.body.category);
        category.create()
            .then(() => res.render(''))//
            .catch(next);
    }
    //
}

module.exports = new CategoryController();
