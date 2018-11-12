const vehicles = require("../vehicles");
let UserModel = require("../models/VehiclesModels");

module.exports.list =  function list(request, response) {
    UserModel.find({}).exec()
    .then(v => {
    console.log(v);
    return response.json(v);
    });
}

module.exports.show =  function show(req, res) {
    UserModel.findById(req.params.id).exec()
    .then(com => {
        return res.json(com);
    });
}


module.exports.create =  function create(req, res) {
    const newV= new UserModel();

    newV.year = req.body.year;
    newV.make = req.body.make;
    newV.model = req.body.model;
    newV.save().then(savedV => {
        console.log(savedV);
      });
}

module.exports.update =  function update(req, res) {
    let veh = vehicles.find((u) => u._id == req.params.id); 
    for (let property1 in veh) {
        veh[property1]= req.body[property1];
      }
      return res.json(req.body);

}

module.exports.remove =  function remove(req, res) {
    let veh = vehicles.find((u) => u._id == req.params.id);
     veh.isActive=false;

    return res.send("Deleted");
}
   