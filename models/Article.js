const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Article = new Schema (
    {
        title: { type: String, required: true, },
        creatorId: { type: String, required: true, },
        category: { type: String, required: true},
        comments: [ 
            {
                userId: String,
                comment: String,
                date: Date,
            }
        ],
        votes: [
            {
                userId: String,
                vote: Number,
            }
        ],
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    }
);

// plugin
mongoose.plugin(slug);

module.exports = mongoose.model('Article', Article);
