'use strict';

// exported to /server/router/router.js
module.exports = function(router){
  router.get('/', function (req,res){
    res.send('userRouter -> /');
  });
};
