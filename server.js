var express = require('./config/express');

var app = express();
var PORT = process.env.PORT ;
app.listen(PORT);
module.exports = app;
console.log('server listening on port ' + PORT);