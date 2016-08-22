const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Application DB Connection
var NODE_ENV = 'development';
var config = require('./env.json')[process.env.NODE_ENV || 'development'];

mongoose.connect(config.MONGO_URI, config.MONGO_OPTIONS, function(err) {
  if (err) {
    console.log('error establishing db connection to ' + config.MONGO_URI)
  } else {
    console.log('successfully established db connection to ' + config.MONGO_URI )
  };
});



//Import API services here
const contactService = require('./contactService/contactService.js')
