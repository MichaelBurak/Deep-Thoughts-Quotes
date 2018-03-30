const mongoose = require('mongoose')
const { Schema } = mongoose

const quoteSchema = new Schema({
    text: String,
    author: String
})

module.exports = quoteSchema