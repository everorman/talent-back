const express = require("express");
const app = express();
const squareService = require('./services/square.service');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/", (req, res) => {
  const { square } = req.body;
  if (!squareService.validateSquare(square)) return res.status(400).send('Invalid square format');
  const result = squareService.goodSquares(square);
  return res.status(200).send({ result });
});

module.exports = app;