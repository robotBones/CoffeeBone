# This file is a hook to start the server
# server files are separated from this so they're portable and testable

# setting app root path to node.js global namespace
global.APP_ROOT = __dirname

# require express http server
server = require APP_ROOT + '/server/server-config.coffee'

# we defer to localhost:8000 if a process port and host are not defined.
# also for coffeescript, Error: listen EADDRINUSE is thrown if host and port or local variables so I set them on express
server.set 'port', process.env.PORT or 8000
server.set 'host', process.env.HOST or 'localhost'
console.log('port:',server.get('port'), 'host:',server.get('host'), 'env:', process.env.NODE_ENV  )

server.listen server.get('port'), server.get('host')

# remove message when in production
# NODE_ENV seems to no longer have a default value and is undefined
# logs Started Listening on host : port at Date
if process.env.NODE_ENV is 'development'
  console.log 'Started Listening on', server.get('host'), ':', server.get('port'), 'at', Date().slice(16,24)
