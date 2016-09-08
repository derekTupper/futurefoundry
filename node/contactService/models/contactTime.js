const mongoose = require('mongoose')
      ,Schema = mongoose.Schema
      ,ObjectId = Schema.ObjectId;

var contactTime = new Schema({
  contactTimeDropdown: Number,
});
