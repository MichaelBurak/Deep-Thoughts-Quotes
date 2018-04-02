// const passport = require("passport");
// const TwitterStrategy = require("passport-twitter").Strategy;
// const mongoose = require("mongoose");
// const keys = require("../config/keys");
// const User = mongoose.model("users");

// passport.serializeUser((user, cb) => {
//   cb(null, user.id);
// });

// passport.deserializeUser((id, cb) => {
//   User.findById(id).then(user => {
//     cb(null, user);
//   });
// });

// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: keys.consumerKey,
//       consumerSecret: keys.consumerSecret,
//       callbackURL: "http://127.0.0.1:5000/auth/callback"
//     },
//     async (token, tokenSecret, profile, cb) => {
//       const existingUser = await User.findOne({ screenName: profile.username });

//       if (existingUser) {
//         return cb(null, existingUser);
//       }

//       const user = await new User({ screenName: profile.username }).save();
//       return cb(null, user);
//     }
//   )
// );
