const mongoose = require('mongoose')
const TheDiscourse = mongoose.model('discourse')

module.exports = app => {
    app.get('/api/discourse', async (req, res) => {
        const tm = await Discourse.find()
        res.send(tm)
    })
    app.put('/api/discourse'), async (req, res) => {
        //redirect?
    }
    app.delete('/api/discourse', (req, res) => {
        Discourse.find((discourse) => {
            discourse.text = ''
            discourse.save()
        })
    })
}