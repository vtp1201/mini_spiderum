const express = require('express');
const ejs = require('ejs');
const methodOverride = require('method-override');

const app = express();

const route = require('./routes/index');
const db = require('./config/db/index');

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// Connect to DB
db.connect();

// view engine
app.set('view engine', 'ejs');

// Routes init
route(app);

app.listen(5000, () => {
    console.log('listening on port 5000');
});