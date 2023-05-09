var createError = require('html-errors');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World from pod: ' + process.environment.HOSTNAME + '\n')
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});

