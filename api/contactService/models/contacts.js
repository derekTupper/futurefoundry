const mongoose = require('mongoose')
      ,Schema = mongoose.Schema
      ,ObjectId = Schema.ObjectId;

var contactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  contactMethod: String,
  contactTime: Number,
  projectBudget: Number,
  projectDescription: String,
  date: { type: Date, default: Date.now }
});




var contactProjectBudget = new Schema({
  contactProjectBudgetDropdown: Number,
});
