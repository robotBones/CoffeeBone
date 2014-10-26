'use strict';
// required by server-config.js
module.exports = function(server, express){
  // routers
  var indexRouter = express.Router();
  var userRouter  = express.Router();
  var videoRouter = express.Router();
  var apiRouter   = express.Router();
  var adminRouter = express.Router();

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


  // require routes and pass express router
  require('./index/indexRoutes.js')(indexRouter);
  require('./users/userRoutes.js')(userRouter);
  require('./videos/videoRoutes.js')(videoRouter);
  require('./apis/apiRoutes.js')(apiRouter);
  require('./admins/adminRoutes.js')(adminRouter);
};