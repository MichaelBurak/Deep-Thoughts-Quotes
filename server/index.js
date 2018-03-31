const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const expressSession = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
require('./services/passport');

require('./models/User')
require('./models/Quote')
require('./models/Submission')
require('./models/Discourse')

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json());

app.use(expressSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: [keys.cookieKey],
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.send({ helloWorld: "Hello Employers, I know MERN" })
})

app.use(bodyParser.json());

require('./routes/authRoutes')(app)
require('./routes/quoteRoutes')(app)
require('./routes/submissionRoutes')(app)
require('./routes/discourseRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);