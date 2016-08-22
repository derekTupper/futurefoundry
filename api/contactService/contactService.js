const express = require('express');
const contactService = express();









contactService.get('/api/v1/contactService/projectBudget', function (req,res, next) {
  db.contact.find()
});

contactService.listen(8000, function (){
  console.log('contactService is listing on port 8000');
});
