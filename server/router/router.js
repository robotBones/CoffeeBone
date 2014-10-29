'use strict';

var ROUTER_PATH = APP_ROOT + '/server/router';

// required by server-config.js
module.exports = function(server, express){

  // routers
  var indexRouter = express.Router();
  var userRouter  = express.Router();
  var videoRouter = express.Router();
  var apiRouter   = express.Router();
  var adminRouter = express.Router();

  // require routes and pass express router
  require(ROUTER_PATH + '/index/indexRoutes.js')(indexRouter);
  require(ROUTER_PATH + '/users/userRoutes.js')(userRouter);
  require(ROUTER_PATH + '/videos/videoRoutes.js')(videoRouter);
  require(ROUTER_PATH + '/apis/apiRoutes.js')(apiRouter);
  require(ROUTER_PATH + '/admins/adminRoutes.js')(adminRouter);

  // configure express to map resource type to router
  server.use('/', indexRouter);
  server.use('/user', userRouter);
  server.use('/video', videoRouter);
  server.use('/api', apiRouter);
  server.use('/admin', adminRouter);

  // catch-all route redirect
  server.use('/*', function (req,res){
    res.redirect('/');
  });

};
