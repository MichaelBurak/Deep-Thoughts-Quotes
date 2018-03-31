const mongoose = require("mongoose");
const TheDiscourse = mongoose.model("discourses");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get("/api/thediscourse", async (req, res) => {
    const discourse = await TheDiscourse.find();
    res.send(discourse);
  });
  app.put("/api/thediscourse", requireLogin, async (req, res) => {
    const { text } = req.body;
    const discourse = await TheDiscourse.findOneAndUpdate(
      { text: { $exists: true } },
      { text: text },
      { new: true }
    );
    res.send(discourse);
  });
  app.put("/api/thediscourseclear", requireLogin, async (req, res) => {
    const discourse = await TheDiscourse.findOneAndUpdate(
      { text: { $exists: true } },
      { text: "" },
      { new: true }
    );
    res.send(discourse);
  });
};
