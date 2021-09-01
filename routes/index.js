const siteRouter = require('./site');
const authRouter = require('./auth');
const categoryRouter = require('./category');
const articleRouter = require('./article');

function route(app) {
    
    app.use('/', siteRouter);

    app.use('/auth', authRouter);

    app.use('/category', categoryRouter);

    app.use('/article', articleRouter);

    app.use((req, res) => {
        res.render('notfound')
    })
}

module.exports = route;