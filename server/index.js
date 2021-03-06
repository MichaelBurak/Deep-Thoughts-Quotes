const express = require("express");

const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
var router = express.Router();

require("./models/Quote");
require("./models/Submission");
require("./models/Discourse");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

// app.use(passport.initialize());
// app.use(passport.session());

app.use(bodyParser.json());

require("./routes/quoteRoutes")(app);
require("./routes/submissionRoutes")(app);
require("./routes/discourseRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
