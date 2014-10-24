'use strict';

// node_modules
var express       = require('express');
var requestLogger = require('morgan');
var bodyParser    = require('body-parser');

// express server
var server = express();

// routers
var userRouter  = express.Router();
var videoRouter = express.Router();
var apiRouter   = express.Router();
var adminRouter = express.Router();

// configuration
server.use(requestLogger('dev'));

// routes
server.use('/user', userRouter);
server.use('/video', videoRouter);
server.use('/api', apiRouter);
server.use('/admin', adminRouter);

// catch route redirect
server.use('/*', function (req,res){
  res.redirect('/');
});

// required by index.js
module.exports = server;
