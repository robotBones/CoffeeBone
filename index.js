// This file starts our server, we defer to localhost:8000
// if a process port and url are not defined.

var app = require('./server/server.js');

var port = process.env.PORT || 8000;
var url = process.env.URL || 'localhost';

app.listen(port, url);

// NODE_ENV is 'development by 'default'
(process.env.NODE_ENV === 'development') && console.log('Started Listening on', url, ':', port, 'at', Date().slice(16,24));