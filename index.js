var express = require('express');
var path = require('path');
var app = express();

/*app.get('/', function (req, res) {
    return res.send("hello world");
})
*/
app.get('/', function (req, res) {
  child_process.exec(
    'gzip ' + req.query.file_path,
    function (err, data) {
      console.log('err: ', err)
      console.log('data: ', data);
    });
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
    return res.send("Can you hear me?");
})

var server = app.listen(3000, function () {
  console.log("server listening on port 3000");
})
