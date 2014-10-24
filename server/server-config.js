'use strict';

// node_modules
var express       = require('express');
var requestLogger = require('morgan');
var bodyParser    = require('body-parser');

// express server
var server = express();

// configuration / middleware
server.use(requestLogger('dev'));

// import router and pass dependencies
require('./router/router.js')(server, express);

// A catch-all in ./router/router.js will prevent requests falling through here

// required by index.js
module.exports = server;
