//not yet implemented
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
