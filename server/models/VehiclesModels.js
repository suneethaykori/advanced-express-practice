let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    year:{
        required: true,
         type: Number
    },
    make:{
        required: true,
        type: String
    },
    model:{
        required: true,
        type: String
    },

});

module.exports =  mongoose.model("Vehicle", schema);
