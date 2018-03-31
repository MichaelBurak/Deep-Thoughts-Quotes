const mongoose = require('mongoose')
const passport = require('passport')
const Submission = mongoose.model('submissions')
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
    app.post('/api/submissions', requireLogin, async (req, res) => {
        const { text, author } = req.body
        const screenName = req.user.screenName
        const submission = new Submission({
            text,
            author,
            screenName: screenName
        });

        try {
            await submission.save()
            res.send(submission)
        }
        catch (err) {
            res.status(422).send(err);
        }
    })
}