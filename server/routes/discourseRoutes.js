const mongoose = require('mongoose')
const TheDiscourse = mongoose.model('discourses')

module.exports = app => {
    app.get('/api/thediscourse', async (req, res) => {
        const tm = await TheDiscourse.find()
        res.send(tm)
    })
    app.put('/api/thediscourse'), async (req, res) => {
        //redirect?
    }
    app.delete('/api/thediscourse', (req, res) => {
        TheDiscourse.find((discourse) => {
            discourse.text = ''
            discourse.save()
        })
    })
}