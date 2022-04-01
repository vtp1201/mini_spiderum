const passport = require('passport');
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const StrateryJwt = passportJwt.Strategy;

const User = require('../../app/models/User');

passport.use(
    new StrateryJwt(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET || 'key',
        },
        async function (jwtPayload, done) {
            try {
                const user = await User.findOne({_id: jwtPayload.id});
                return done(null, user);
            } catch (error) {
                return done(err);
            }
        }
    )
)