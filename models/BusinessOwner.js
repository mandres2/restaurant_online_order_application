const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
const BusinessOwnerSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  businessName: {
    type: String,
    required: true
  },
  businessAddress: {
    type: String,
    required: true
  },  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = BusinessOwner = mongoose.model("businessOwners", BusinessOwnerSchema);

