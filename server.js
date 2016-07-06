process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
express = require('./config/express');

var db= mongoose();
var app = express();
var PORT = process.env.PORT ;
var IP = process.env.IP;
app.listen(PORT, IP);
module.exports = app;
console.log('server listening on port ' + PORT + ', IP ' + IP);