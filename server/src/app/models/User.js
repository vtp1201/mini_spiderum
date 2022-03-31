const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: Schema.Types.String, required: true, unique: true },
        password: { type: Schema.Types.String },
        googleId: { type: Schema.Types.String },
        facebookId: { type: Schema.Types.String },
        twitterId: { type: Schema.Types.String },
        email: { type: Schema.Types.String, required: true },
        name: { type: Schema.Types.String },
        avatar: { type: Schema.Types.String },
        description: { type: Schema.Types.String },
        dob: { type: Schema.Types.Date},
        gender: { type: Schema.Types.String},
        following: [{ ref: 'User', type: Schema.Types.ObjectId }],
        followers: [{ ref: 'User', type: Schema.Types.ObjectId }],
        slug: { type: Schema.Types.String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

User.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next();
    });
});

// plugin
mongoose.plugin(slug);

module.exports = mongoose.model('User', User);
