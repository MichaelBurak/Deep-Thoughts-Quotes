//not yet implemented... var mongoose = require('mongoose'),
// 	passport = require('passport'),
// 	express = require('express'),
// 	jwt = require('jsonwebtoken'),
// 	expressJwt = require('express-jwt'),
// 	cors = require('cors'),
// 	bodyParser = require('body-parser'),
// 	router = express.Router(),
// 	request = require('request');
// // twitterConfig = require('./twitter.config.js');

// var User = mongoose.model('users');
// var passportConfig = require('./passport');

// //setup configuration for facebook login
// passportConfig();

// router.route('/health-check').get(function(req, res) {
// 	res.status(200);
// 	res.send('Hello World');
// });

// var createToken = function(auth) {
// 	return jwt.sign(
// 		{
// 			id: auth.id,
// 		},
// 		'my-secret',
// 		{
// 			expiresIn: 60 * 120,
// 		}
// 	);
// };

// var generateToken = function(req, res, next) {
// 	req.token = createToken(req.auth);
// 	return next();
// };

// var sendToken = function(req, res) {
// 	res.setHeader('x-auth-token', req.token);
// 	return res.status(200).send(JSON.stringify(req.user));
// };

// module.exports = app => {
// 	app.post('/api/auth/twitter/reverse'),
// 		(req, res) => {
// 			console.log(req);
// 			request.post(
// 				{
// 					url: 'https://api.twitter.com/oauth/request_token',
// 					oauth: {
// 						oauth_callback: 'http%3A%2F%2Flocalhost%3A3000%2Ftwitter-callback',
// 						consumer_key: 'KEY',
// 						consumer_secret: 'SECRET',
// 					},
// 				},
// 				function(err, r, body) {
// 					if (err) {
// 						return res.send(500, { message: err.message });
// 					}

// 					var jsonStr = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
// 					res.send(JSON.parse(jsonStr));
// 				}
// 			);
// 		};

// 	app.post('/api/auth/twitter/reverse'),
// 		(req, res, next) => {
// 			console.log(req);
// 			request.post(
// 				{
// 					url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
// 					oauth: {
// 						consumer_key: 'KEY',
// 						consumer_secret: 'SECRET',
// 						token: req.query.oauth_token,
// 					},
// 					form: { oauth_verifier: req.query.oauth_verifier },
// 				},
// 				function(err, r, body) {
// 					if (err) {
// 						return res.send(500, { message: err.message });
// 					}

// 					console.log(body);
// 					const bodyString = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
// 					const parsedBody = JSON.parse(bodyString);

// 					req.body['oauth_token'] = parsedBody.oauth_token;
// 					req.body['oauth_token_secret'] = parsedBody.oauth_token_secret;
// 					req.body['user_id'] = parsedBody.user_id;

// 					next();
// 				}
// 			);
// 		},
// 		passport.authenticate('twitter-token', { session: false }),
// 		function(req, res, next) {
// 			if (!req.user) {
// 				return res.send(401, 'User Not Authenticated');
// 			}

// 			// prepare token for API
// 			req.auth = {
// 				id: req.user.id,
// 			};

// 			return next();
// 		},
// 		generateToken,
// 		sendToken;
// };

// //token handling middleware
// var authenticate = expressJwt({
// 	secret: 'my-secret',
// 	requestProperty: 'auth',
// 	getToken: function(req) {
// 		if (req.headers['x-auth-token']) {
// 			return req.headers['x-auth-token'];
// 		}
// 		return null;
// 	},
// });

// var getCurrentUser = function(req, res, next) {
// 	User.findById(req.auth.id, function(err, user) {
// 		if (err) {
// 			next(err);
// 		} else {
// 			req.user = user;
// 			next();
// 		}
// 	});
// };

// var getOne = function(req, res) {
// 	var user = req.user.toObject();

// 	delete user['twitterProvider'];
// 	delete user['__v'];

// 	res.json(user);
// };

// router.route('/auth/me').get(authenticate, getCurrentUser, getOne);

// // app.use('/api/v1', router);
