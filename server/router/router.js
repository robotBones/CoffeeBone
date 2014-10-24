'use strict';
// required by server-config.js
module.exports = function(server, express){
  // routers
  var userRouter  = express.Router();
  var videoRouter = express.Router();
  var apiRouter   = express.Router();
  var adminRouter = express.Router();

  // configure express to map resource type to router
  server.use('/user', userRouter);
  server.use('/video', videoRouter);
  server.use('/api', apiRouter);
  server.use('/admin', adminRouter);

  // catch-all route redirect
  server.use('/*', function (req,res){
    res.redirect('/');
  });


  // require routes and pass express router
  require('./users/userRoutes')(userRouter);
  require('./videos/videoRoutes')(videoRouter);
  require('./apis/apiRoutes')(apiRouter);
  require('./admins/adminRoutes')(adminRouter);
};