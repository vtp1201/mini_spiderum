const authRouter = require('./auth');
const categoryRouter = require('./category');
const articleRouter = require('./article');
const userRouter = require('./user');

function route(app) {
    app.use('/api/auth', authRouter);

    app.use('/api/category', categoryRouter);

    app.use('/api/article', articleRouter);

    app.use('/api/user', userRouter);

    app.use((req, res) => {
        res.sent('notfound');
    })
}

module.exports = route;