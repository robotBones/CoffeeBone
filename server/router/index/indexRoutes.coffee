# exported to APP_ROOT/server/router/router.js
module.exports = (router) ->
  # welcome page
  router.get '/', (req,res) ->
    res.send 'indexRouter says Welcome'