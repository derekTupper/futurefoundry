const mongoose = require('mongoose');


const contactSchema = require('./contactSchemas');
var contact = mongoose.model('contact', contactSchema );


const contactTime = require('./contactSchemas');
var contactTime = mongoose.model('contactTime', contactTimeDropdown );


const contactProjectBudget = require('./contactSchemas');
var contactProjectBudget = mongoose.model('contactProjectBudget', contactProjectBudgetDropdown);
