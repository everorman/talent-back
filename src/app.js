const express = require("express");
const app = express();
const squareService = require('./services/square.service');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/", (req, res) => {
  const { array } = req.body;
  const result = squareService.goodSquares(array);
  res.status(200).send({ result });
});

module.exports = app;