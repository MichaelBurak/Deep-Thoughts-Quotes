const express = require('express');
// var cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./config/keys');
// const expressSession = require('express-session');
// const passport = require('passport');
const bodyParser = require('body-parser');
//require('./models/User');

// require('./services/passport');
// require('./services/jwtAuth');

require('./models/Quote');
require('./models/Submission');
require('./models/Discourse');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

// const corsOption = {
// 	origin: true,
// 	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// 	credentials: true,
// 	exposedHeaders: ['x-auth-token'],
// };

// app.use(cors(corsOption));

app.use(bodyParser.json());

// app.use(
// 	expressSession({
// 		maxAge: 30 * 24 * 60 * 60 * 1000,
// 		secret: [keys.cookieKey],
// 		resave: true,
// 		saveUninitialized: true,
// 		cookie: { secure: false },
// 	})
// );

// app.use(passport.initialize());
// app.use(passport.session());

app.get('/', (req, res) => {
	res.send({ helloWorld: 'Hello Employers, I know MERN' });
});

app.use(bodyParser.json());

//require('./routes/authRoutes');(app)
require('./routes/quoteRoutes')(app);
require('./routes/submissionRoutes')(app);
require('./routes/discourseRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
