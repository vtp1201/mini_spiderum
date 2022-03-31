const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true},
        articleId: { type: Schema.Types.ObjectId, ref: 'Ariticle'},
        tittle: { type: Schema.Types.String },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Comment', Comment);
