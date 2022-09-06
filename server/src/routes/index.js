const authRouter = require('./auth');
const categoryRouter = require('./category');
const articleRouter = require('./article');
const userRouter = require('./user');

function route(app, passport) {
    app.use('/api/v1/auth', authRouter(passport));

    app.use('/api/v1/category', categoryRouter);

    app.use('/api/v1/article', articleRouter);

    app.use('/api/v1/user', userRouter);

    app.use((req, res) => {
        res.status(404);
        res.json({msg: 'notfound'});
    })
}

module.exports = route;