var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! This is a new version 2.1\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
