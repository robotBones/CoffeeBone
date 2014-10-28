# node_modules
express       = require 'express'
requestLogger = require 'morgan'
bodyParser    = require 'body-parser'
viewEngine    = require 'consolidate'

# express http server
server = express()

# configuration
server.engine('haml', viewEngine.haml)

# middleware
server.use requestLogger('dev')
server.use bodyParser()

# import router and pass dependencies
require(APP_ROOT +'server/router/router.js')(server, express)

# A catch-all in ./router/router.js
# will prevent requests falling through here

# required by index.js
module.exports = server