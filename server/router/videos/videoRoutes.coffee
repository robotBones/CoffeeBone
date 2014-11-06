# exported to APP_ROOT/server/router/router.js
fs = require 'fs'
module.exports = (router)->
  router.get '/', (req,res)->
    fs.readFile APP_ROOT+'/data.json', (err,data)->
      res.json JSON.parse data