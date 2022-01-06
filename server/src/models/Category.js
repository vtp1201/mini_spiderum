const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        title: { type: String, required: true,},
        description: { type: String, required: true },
        articles: [ {id: String} ],
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

// plugin
mongoose.plugin(slug);

module.exports = mongoose.model('Category', Category);