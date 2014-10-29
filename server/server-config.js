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
// parse application/x-www-form-urlencoded
// uses qs library for parsing urlencoded nested arrays and objects
server.use(bodyParser.urlencoded({extended: true}));
// parse application/json
server.use(bodyParser.json());
// server.use(express.static(APP_ROOT + '/client'));


// import router and pass dependencies
require(APP_ROOT + '/server/router/router.js')(server, express);

// A catch-all in ./router/router.js
// will prevent requests falling through here

// required by index.js
module.exports = server;
