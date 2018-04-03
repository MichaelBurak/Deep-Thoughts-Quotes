const mongoose = require('mongoose');
const { Schema } = mongoose;

const discourseSchema = new Schema({
	text: { type: String },
});

mongoose.model('discourses', discourseSchema);
