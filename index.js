'use strict';
// This file is a hook to start the server
// server files are separated from this so they're portable and testable
var path = require('path');
global.appRoot = path.resolve(__dirname);

var server = require(appRoot +'/server/server-config.js');
// we defer to localhost:8000 if a process port and url are not defined.
var port = process.env.PORT || 8000;
var url = process.env.URL || 'localhost';

server.listen(port, url);

// remove message when in production
// NODE_ENV seems to no longer have a default value
(process.env.NODE_ENV === 'development') && console.log('Started Listening on', url, ':', port, 'at', Date().slice(16,24));
