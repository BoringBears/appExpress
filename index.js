var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    return res.send("hello world");
})

app.get('/hello', function (req, res) {
    return res.send("Can you hear me?");
})

var server = app.listen(3000, function () {
  console.log("server listening on port 3000");
})
