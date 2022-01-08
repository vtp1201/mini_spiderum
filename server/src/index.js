const express = require('express')
const methodOverride = require('method-override');
const path = require('path');
const morgan = require('morgan');
const expressSession = require('express-session');

const app = express();

const route = require('./src/routes/index');
const db = require('./src/config/db/index');

//app.use(morgan('combined'));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

// Connect to DB
db.connect();

// check login
global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

// Routes init
route(app);

app.listen(5000, () => {
    console.log('listening on port 5000');
});