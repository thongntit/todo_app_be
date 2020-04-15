const app = (module.exports = require("express")());

("use strict");

app.use("/tasks", require("./tasks"));

app.all("*", (req, res) => {
  res.status(404).send({ msg: "not found" });
});
