const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ailmentSchema = new Schema({
  // ailment refers to what is the users problem
  Ailment: { type: String, required: true },
  // method refers to whether it is pharm or no-pharm
  Method: { type: String, required: false },
  // treatment refers to the specific actions to treat the problem
  Treatment: { type: String, required: false },
  //  
  Age: { type: String, required: false },
  //
  ActivityLevel: { type: String, required: false },
  // 
  Story: { type: String, required: false },
  // User can share sources or references
  Source: { type: String, required: false },
  // Default added
  Date: { type: Date, default: Date.now },
// from local storage request
  Email:{type: String,required: false },

  // likes for updates
  Likes:{type: Number, required: true, default: 0},
});


const Ailment = mongoose.model("ailments", ailmentSchema);

module.exports = Ailment;