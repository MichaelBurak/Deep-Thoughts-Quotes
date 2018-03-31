const mongoose = require("mongoose");
const { Schema } = mongoose;

const discourseSchema = new Schema({
  text: { type: String, maxlength: 140 }
});

mongoose.model("discourses", discourseSchema);
