const Article = require('../models/Article');
const Category = require('../models/Category');
const { mongooseToObject } = require('../../util/mongoose');

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
    store(req, res, next) {
        req.body.creatorId = req.session.userId;
        const article = new Article(req.body);
        article
            .save()
            .then( article => res.redirect(`/article/${article.slug}`))
            .catch(next);
    }
    // [GET] article/:id/edit
    edit(req, res, next) {
        Article.findById(req.params.id)
            .then( article => 
                res.render('article/edit', {
                    article: mongooseToObject(article)
                })
            )
    }
    // [PUT] article/:id/edit-article
    update(req, res, next) {
        Article.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect(`/`))
            .catch(next);
    }
    // [DELETE] article/:id/delete
    delete(req, res, next) {
        Article.delete({ _id:req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE] article/:id/force
    destroy(req, res, next) {
        Article.deleteOne({ _id:req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [PATCH] article/:id/restore
    restore(req, res, next) {
        Article.restore({ _id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [PUT] article/:id/comments
    addComment(req, res, next) {
        Article.findById(req.params.id)
            .then( article => {
                const newComment = { 
                    userId: req.session.userId,
                    comment: req.body.comment,
                    date: Date.now(),
                };
                article.comments.push(newComment);
                article.save();
                res.redirect('back');
            })
            .catch(next)
    }
    // [PUT] article/:id/vote
    vote(req, res, next) {
        Article.findById(req.params.id)
            .then( article => {
                const vote = article.votes.find( votes => votes.userId == req.session.userId);
                if (vote) {
                    
                }
            })
    }
}

module.exports = new ArticleController();
