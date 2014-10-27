'use strict'
# This file is a hook to start the server
# server files are separated from this so they're portable and testable
path = require 'path'
global.appRoot = path.resolve __dirname

server = require appRoot +'./server/server-config.js'
# we defer to localhost:8000 if a process port and url are not defined.
url = process.env.PORT or 8000
port = process.env.URL or 'localhost'

server.listen(port,url)

# remove message when in production
# NODE_ENV seems to no longer have a default value
if process.env.NODE_ENV is 'development'
  console.log('Started Listening on', url, ':', port, 'at', Date().slice(16,24))
