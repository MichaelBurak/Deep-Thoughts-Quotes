const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const bodyParser = require('body-parser')

require('./models/Quote')
require('./models/Submission')
require('./models/Discourse')

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI)

const app = express()

app.get('/', (req, res) => {
    res.send({ helloWorld: "Hello Employers, I know MERN" })
})

app.use(bodyParser.json());

require('./routes/quoteRoutes')(app)
require('./routes/submissionRoutes')(app)
require('./routes/discourseRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);