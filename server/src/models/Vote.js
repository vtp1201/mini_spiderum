const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Vote = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true},
        articleId: { type: Schema.Types.ObjectId, ref: 'Ariticle'},
        vote: { type: Schema.Types.Number },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Vote', Vote);
