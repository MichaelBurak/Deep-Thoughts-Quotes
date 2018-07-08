//not yet implemented
// const express = require('express');
// const passport = require('passport');
// var router = express.Router();
// var twittertokenAuth = require('../middlewares/twittertokenAuth');

// // app.get('/api/thediscourse', async (req, res) => {
// // 	const discourse = await TheDiscourse.find();
// // 	res.send(discourse);
// // });
// module.exports = app => {
// 	app.post('/api/auth/twitter/reverse'),
// 		(req, res) => {
// 			console.log(req);
// 			req.post(
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
// 			req.post(
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
// 		twittertokenAuth.generateToken,
// 		twittertokenAuth.sendToken;
// };

// // const passport = require('passport');

// // module.exports = app => {
// // 	app.get('/auth/login', passport.authenticate('twitter'));

// // 	app.get('/auth/callback', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => {
// // 		res.redirect('/');
// // 	});

// // 	app.get('/auth/logout', (req, res) => {
// // 		req.logout();
// // 		res.redirect('/');
// // 	});

// // 	app.get('/auth/current_user', (req, res) => {
// // 		res.send(req.user);
// // 	});
// // };
