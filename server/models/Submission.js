const mongoose = require('mongoose');
const { Schema } = mongoose;

const submissionSchema = new Schema({
	text: { type: String },
	author: { type: String },
	screenName: String,
});

mongoose.model('submissions', submissionSchema);
