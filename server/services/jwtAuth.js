// const passport = require('passport');
// const keys = require('../config/keys');
// const express = require('express');
// require('./passport');
// var router = express.Router();

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

// router.route('/auth/').get(function(req, res) {
// 	request.get(res.send('Route'));
// });

// router.route('/auth/twitter/reverse').post(function(req, res) {
// 	request.post(
// 		{
// 			url: 'https://api.twitter.com/oauth/request_token',
// 			oauth: {
// 				oauth_callback: 'http%3A%2F%2Flocalhost%3A3000%2Ftwitter-callback',
// 				consumer_key: keys.consumerKey,
// 				consumer_secret: keys.consumerSecret,
// 			},
// 		},
// 		function(err, r, body) {
// 			if (err) {
// 				return res.send(500, { message: err.message });
// 			}

// 			var jsonStr = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
// 			res.send(JSON.parse(jsonStr));
// 		}
// 	);
// });

// router.route('/auth/twitter').post(
// 	(req, res, next) => {
// 		request.post(
// 			{
// 				url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
// 				oauth: {
// 					consumerKey: keys.consumerKey,
// 					consumerSecret: keys.consumerSecret,
// 					token: req.query.oauth_token,
// 				},
// 				form: { oauth_verifier: req.query.oauth_verifier },
// 			},
// 			function(err, r, body) {
// 				if (err) {
// 					return res.send(500, { message: err.message });
// 				}

// 				console.log(body);
// 				const bodyString = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
// 				const parsedBody = JSON.parse(bodyString);

// 				req.body['oauth_token'] = parsedBody.oauth_token;
// 				req.body['oauth_token_secret'] = parsedBody.oauth_token_secret;
// 				req.body['user_id'] = parsedBody.user_id;

// 				next();
// 			}
// 		);
// 	},
// 	passport.authenticate('twitter-token', { session: false }),
// 	function(req, res, next) {
// 		if (!req.user) {
// 			return res.send(401, 'User Not Authenticated');
// 		}

// 		// prepare token for API
// 		req.auth = {
// 			id: req.user.id,
// 		};

// 		return next();
// 	},
// 	generateToken,
// 	sendToken
// );
