const Category = require('../models/Category');
const { mongooseToObject } = require('../../util/mongoose');

class CategoryController {
    // [GET] category/:slug
    show(req, res, next) {
        Category.findOne({ slug: req.params.slug })
            .then( category => {

            })
    }
    // [GET] category/create
    create(req, res, next) {
        res.render('createCategory');
    }
    // [POST] category/store
    store(req, res, next) {
        const category = new Category(req.body.category);
        category.create()
            .then(category => res.redirect(`/category/${category.slug}`))//
            .catch(next);
    }
    // [GET] category/:id/edit
    edit(req, res, next) {
        Category.findById(req.params.id)
            .then(category => 
                res.render('categories/edit', {
                    category: mongooseToObject(category)
                })
            )
            .catch(next);
    }
    // [PUT] category/:id/edit-category
    update(req, res, next) {
        Category.findByIdAndUpdate(req.params.id, req.body)
            .then(category => res.redirect(`/category/${category.slug})`))
            .catch(next);
    }
}

module.exports = new CategoryController();
