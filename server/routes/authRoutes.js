const passport = require('passport');

module.exports = app => {
	app.get('/auth/login', passport.authenticate('twitter'));

	app.get('/auth/callback', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => {
		res.redirect('/');
	});

	app.get('/auth/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/auth/current_user', (req, res) => {
		res.send(req.user);
	});
};
