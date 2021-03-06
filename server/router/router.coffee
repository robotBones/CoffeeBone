ROUTER_PATH = APP_ROOT + '/server/router'
# required by server-config.js
module.exports = (server, express) ->

  # routers
  indexRouter = express.Router()
  userRouter  = express.Router()
  videoRouter = express.Router()
  apiRouter   = express.Router()
  adminRouter = express.Router()

  # require routes and pass express router
  require(ROUTER_PATH + '/index/indexRoutes.coffee')(indexRouter)
  require(ROUTER_PATH + '/users/userRoutes.coffee')(userRouter)
  require(ROUTER_PATH + '/videos/videoRoutes.coffee')(videoRouter)
  require(ROUTER_PATH + '/apis/apiRoutes.coffee')(apiRouter)
  require(ROUTER_PATH + '/admins/adminRoutes.coffee')(adminRouter)

  # configure express to map resource type to router
  server.use('/', indexRouter);
  server.use('/user', userRouter);
  server.use('/video', videoRouter);
  server.use('/api', apiRouter);
  server.use('/admin', adminRouter);

  # catch-all route redirect
  server.use '/*', (req, res) ->
    res.redirect '/'
