const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = require('../models/User')

//refactor to be more accurate to users

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new TwitterStrategy({
    consumerKey: keys.consumerKey,
    consumerSecret: keys.consumerSecret,
    callbackURL: "http://127.0.0.1:5000/auth/callback"
}, async (token, tokenSecret, profile, cb) => {
    const existingUser = await User.findOne({ twitterId: profile.id });

    if (existingUser) {
        return cb(null, existingUser);
    }

    const user = await new User({ twitterId: profile.id }).save();
    return cb(null, user);
}));