'use strict';

// node_modules
var express       = require('express');
var requestLogger = require('morgan');
var bodyParser    = require('body-parser');
var viewEngine    = require('consolidate');

// express server
var server = express();

// configuration
server.engine('haml', viewEngine.haml);

// middleware
server.use(requestLogger('dev'));
server.use(bodyParser());

// import router and pass dependencies
require('./router/router.js')(server, express);

// A catch-all in ./router/router.js
// will prevent requests falling through here

// required by index.js
module.exports = server;
