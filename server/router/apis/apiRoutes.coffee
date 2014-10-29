# exported to APP_ROOT/server/router/router.js
module.exports = (router) ->
  router.get '/', (req,res) ->
    res.send 'apiRouter -> /'