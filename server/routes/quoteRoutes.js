const mongoose = require('mongoose')
const Quote = mongoose.model('quotes')

module.exports = app => {
    app.get('/api/quotes', (req, res) => {
        Quote.aggregate([
            { $match: {} },
            { $sample: { size: 1 } }],
            (err, resp) => {
                res.send(resp)
            })
    })
    app.get('/api/quotes/:author', async (req, res) => {
        const selected = await Quote.where('author').equals(req.params.author)
        res.send(selected)
    })
}