const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        title: { type: Schema.Types.String, required: true,},
        description: { type: Schema.Types.String, required: true },
        articles: [{ type: Schema.Types.ObjectId, ref:'Article'}],
        slug: { type: Schema.Types.String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

// plugin
mongoose.plugin(slug);

module.exports = mongoose.model('Category', Category);