const mongoose = require('mongoose')
const TheDiscourse = mongoose.model('discourses')

module.exports = app => {
    app.get('/api/thediscourse', async (req, res) => {
        const discourse = await TheDiscourse.find()
        res.send(discourse)
    })
    app.put('/api/thediscourse', async (req, res) => {
        const { text } = req.body
        const discourse = await TheDiscourse.findOneAndUpdate({ text: { $exists: true } }, { text: text }, { new: true })
        res.send(discourse)
    })
    app.put('/api/thediscourseclear', async (req, res) => {
        const discourse = await TheDiscourse.findOneAndUpdate({ text: { $exists: true } }, { text: '' }, { new: true })
        res.send(discourse)
    })

}
