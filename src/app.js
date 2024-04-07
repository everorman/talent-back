const express = require("express");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/", (req, res) => {
  const { array } = req.body;
  res.status(200).send("Hello World!");
});

module.exports = app;