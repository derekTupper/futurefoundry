const express = require('express');
const app = express();

app.all('/services/', function(req, res, next) {
  res.send('HelloWorld!');
  next();
});

app.listen( 8000, function(){
  console.log('WebServices listening on port 8000');
});
