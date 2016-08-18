const express = require('express');
const contactService = express();

contactService.all('/services/contacts', function (req,res, next) {
  res.send('HelloWorld!');
  next();
});

contactService.listen(8000, function (){
  console.log('contactService is listing on port 8000');  
});

// hello
