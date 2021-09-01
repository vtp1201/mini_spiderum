const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        title: { type: String, required: true,},
        description: { type: String, required: true },
        articles: [ {id: String}],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Category', Category);