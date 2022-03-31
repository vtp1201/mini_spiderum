const express = require('express')
const methodOverride = require('method-override');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const expressSession = require('express-session');
const helmet = require('helmet');
const passport = require('passport');

const app = express();

const route = require('./routes/index');
const db = require('./config/db/index');

//app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

const clientHost = process.env.CLIENT_HOST || 'localhost';
const clientPort = process.env.CLIENT_PORT || 3000;
const clienturl = `http://${clientHost}:${clientPort}`;

app.use(cors({ origin: clienturl, credentials: true }));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Connect to DB
db.connect();

// Routes init
route(app, passport);

const serverPort = process.env.SERVER_PORT || 5000;
app.listen(serverPort, () => {
    console.log(`listening on port ${serverPort}`);
});