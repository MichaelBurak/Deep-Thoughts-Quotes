const mongoose = require('mongoose')
const Submission = mongoose.model('submissions')

module.exports = app => {
    app.post('/api/submissions', async (req, res) => {
        const { text, author } = req.body

        const submission = new Submission({
            text,
            author
            //_user: req.user.handle?
        });

        try {
            await submission.save()
        }
        catch (err) {
            res.status(422).send(err);
        }
    })
}