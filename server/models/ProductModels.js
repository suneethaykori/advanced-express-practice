let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 description: {
     required:true,
   type: String
 },
 
});

module.exports =  mongoose.model("Product", schema);

