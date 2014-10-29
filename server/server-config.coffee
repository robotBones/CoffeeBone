### node_modules ###
express       = require 'express'
requestLogger = require 'morgan'
bodyParser    = require 'body-parser'
viewEngine    = require 'consolidate'

### express http server ###
server = express()

### configuration ###
server.engine 'haml', viewEngine.haml
server.set 'views', APP_ROOT + 'client/views'

### middleware ###
server.use requestLogger('dev')
# parse application/x-www-form-urlencoded
server.use bodyParser.urlencoded
  extended: true # uses qs library for parsing urlencoded nested arrays and objects into req.body
# parse application/json
server.use bodyParser.json()

### import router and pass dependencies ###
require(APP_ROOT + '/server/router/router.coffee')(server, express)

# A catch-all in ./router/router.js
# will prevent requests falling through here

# required by index.js
module.exports = server