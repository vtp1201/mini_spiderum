const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require('../../app/models/User');

const GOOGLE_CALLBACK_URL = 'http://localhost:5000/api/v1/auth/google/callback';

passport.use(
    new GoogleStrategy(
        
    )
)