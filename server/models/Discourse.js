const mongoose = require('mongoose')
const { Schema } = mongoose

const discourseSchema = new Schema({
    text: String
})

module.exports = discourseSchema