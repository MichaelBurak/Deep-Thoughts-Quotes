const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  screenName: String
});

mongoose.model("users", userSchema);
