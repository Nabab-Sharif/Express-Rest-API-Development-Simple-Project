
const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  UserName: { type: String,unique:true},
  EmailAddress: { type: String },
  Password: { type: String },
  City: { type: String },
  MobileNumber: { type: String}

}, { versionKey: false });


const ProfileModel = mongoose.model("Profile", DataSchema);
module.exports = ProfileModel;

