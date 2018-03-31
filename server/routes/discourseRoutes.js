const mongoose = require('mongoose')
const TheDiscourse = mongoose.model('discourses')

module.exports = app => {
    app.get('/api/thediscourse', async (req, res) => {
        const tm = await TheDiscourse.find()
        res.send(tm)
    })
    app.put('/api/thediscourse', async (req, res) => {
        const { text } = req.body
        const discord = await TheDiscourse.findOneAndUpdate({ text: { $exists: true } }, { text: text }, { new: true })
        res.send(discord)
    })
    app.put('/api/thediscourseclear', async (req, res) => {
        const dis = await TheDiscourse.findOneAndUpdate({ text: { $exists: true } }, { text: '' }, { new: true })
        res.send(dis)
    })

}
