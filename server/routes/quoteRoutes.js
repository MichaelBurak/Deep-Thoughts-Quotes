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
}