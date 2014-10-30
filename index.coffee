# This file is a hook to start the server
# server files are separated from this so they're portable and testable

# modules
colors = require 'colors'
colorChoices = [
  'red'
  'green'
  'yellow'
  'magenta'
  'cyan'
  'blue'
]
randomColor = colorChoices[Math.floor Math.random() * colorChoices.length]

# setting app root path to node.js global namespace
global.APP_ROOT = __dirname

# require express http server
server = require APP_ROOT + '/server/server-config.coffee'

# we defer to localhost:8000 if a process port and host are not defined.
# also for coffeescript, Error: listen EADDRINUSE is thrown if host and port or local variables so I set them on express
server.set 'port', process.env.PORT or 8000
server.set 'host', process.env.HOST or 'localhost'

server.listen server.get('port'), server.get('host')

# refrain from logging message when in production
if server.get('env') is 'development'
  console.info [
    Date().slice(16,24),' '
    '<',server.get('env'),'>',
    ' server listening on ',
    '<',server.get('host'),':',server.get('port'),'>'
  ].join('')[randomColor].bgWhite
