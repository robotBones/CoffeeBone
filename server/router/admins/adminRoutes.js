'use strict';

// exported to /server/router/router.js
module.exports = function(router){
  // welcome page
  router.get('/', function (req,res){
    res.send('indexRouter says Welcome')
  });
};