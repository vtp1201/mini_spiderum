const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Article = new Schema (
    {
        title: { type: String, required: true, },
        creatorId: { type: String, required: true, },
        category: { type: String, required: true},
        votes: Number,
        comments: Number,
        detail: [
            {
                userId: String,
                vote: Number,
                comment: String,
            }
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Article', Article);
