const Article = require('../models/Article');
const { mongooseToObject } = require('../util/mongoose');

class ArticleController {
    // [GET] article/:slug
    show(req, res, next) {
        Article.findOne({ slug: req.params.slug })
            .then( article => 
                res.render('articles/show', {
                    article: mongooseToObject(article),
                }),
            )
            .catch(next)
    }
    // [GET] article/create
    create(req, res, next) {
        res.render('articles/create');
    }
    // [POST] article/create-article
    create(req, res, next) {
        const article = new Article(req.body);
        article
            .save()
            .then( article => res.redirect(`/article/${article.slug}`))
            .catch(next);
    }
    // [GET] article/:id/edit
    edit(req, res, next){
        Article.findById(req.params.id)
            .then( article => 
                res.render('article/edit', {
                    article: mongooseToObject(article)
                })
            )
    }
    // [PUT] article/:id/edit-article
    update(req, res, next){
        Article.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect(`/`))
            .catch(next);
    }
    // [DELETE] article/:id/delete
    delete(req, res, next){
        Article.findByIdAndDelete(req.params.id)
            .then(() => res.redirect(`/`))
            .catch(next);
    }
}

module.exports = new ArticleController();
