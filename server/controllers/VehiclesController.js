const vehicles = require("../vehicles");

module.exports.list =  function list(request, response) {
    return response.json(vehicles);
   }
   module.exports.show =  function show(req, res) {
    let veh = vehicles.find((u) => u._id == req.params.id);
    return res.json(veh);
   }
   module.exports.create =  function create(req, res) {
    const myid = parseInt(vehicles[vehicles.length-1]._id)+1;
    vehicles.push(req.body);
   console.log(req);
   vehicles[vehicles.length-1]._id=myid;
   return res.json(req.body);
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
   