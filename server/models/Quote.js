const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteSchema = new Schema({
  text: String,
  author: String
});

mongoose.model("quotes", quoteSchema);
