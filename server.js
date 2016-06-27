var express = require('./config/express');

var app = express();
var PORT = process.env.PORT ;
var IP = process.env.IP;
app.listen(process.env.PORT, process.env.IP);
module.exports = app;
console.log('server listening on port ' + PORT + ', IP ' + IP);