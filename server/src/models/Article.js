const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Article = new Schema (
    {
        title: { type: Schema.Types.String, required: true,},
        creatorId: { 
            type: Schema.Types.ObjectId, 
            ref: 'User', 
            required: true,
        },
        categoryId: { 
            type: Schema.Types.ObjectId, 
            required: true,
            ref: 'Category',
        },
        comments: [ 
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ],
        votes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Vote',
            }
        ],
        slug: { type: Schema.Types.String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    }
);

// plugin
mongoose.plugin(slug);
Article.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Article', Article);
