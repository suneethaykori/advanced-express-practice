let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 body: {
   required: true,
   type: String
 },
 
});

module.exports =  mongoose.model("Comment", schema);
