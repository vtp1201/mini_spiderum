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
            .catch(next);
    }

    // [GET] article/create
    create(req, res, next) {
        res.render('articles/create');
    }
}

module.exports = new ArticleController();
