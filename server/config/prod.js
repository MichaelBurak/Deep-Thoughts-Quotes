// prod.js - production keys here!
module.exports = {
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
	// callbackURL: process.env.CALLBACK_URL,
	// jwtSecret: process.env.JWT_SECRET,
};
