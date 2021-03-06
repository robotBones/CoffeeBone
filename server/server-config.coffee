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
server.set 'query parser', 'extended'         # req.query stores parsed uri query parsed by qs library
server.disable 'x-powered-by'                 # don't reveal in headers that Express was used.

### middleware ###
# parse application/x-www-form-urlencoded
server.use bodyParser.urlencoded
  extended: true # uses qs library for parsing urlencoded nested arrays and objects into req.body
# parse application/json
server.use bodyParser.json()
# TODO: offload static file serving to a reverse proxy server
server.use express.static APP_ROOT + '/public'
server.use express.static APP_ROOT + '/videos'
server.use express.static APP_ROOT + '/avatars'
server.use requestLogger 'dev'

### import router and pass dependencies ###
require(APP_ROOT + '/server/router/router.coffee')(server, express)

# A catch-all in ./router/router.js
# will prevent requests falling through here

# required by index.js
module.exports = server