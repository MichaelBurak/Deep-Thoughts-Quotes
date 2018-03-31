const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema({
  text: { type: String, maxlength: 2000 },
  author: { type: String, maxlength: 140 },
  screenName: String
});

mongoose.model("submissions", submissionSchema);
