const products = require("../products");
let UserModel = require("../models/ProductModels");

module.exports.list =  function list(request, response) {
    UserModel.find({}).exec()
    .then(p => {
    return response.json(p);
    });
}


module.exports.show =  function show(req, res) {
    UserModel.findById(req.params.id).exec()
    .then(com => {
        return res.json(com);
    });
}

module.exports.create =  function create(request, response) {
    const newProd= new UserModel();

    newProd.name = request.body.name;
    newProd.description = request.body.description;

    newProd.save().then(savedP => {
        console.log(savedP);
      });
}

module.exports.update =  function update(req, res) {
    let prd = products.find((u) => u._id == req.params.id); 
    for (let property1 in prd) {
        prd[property1]= req.body[property1];
      }
      return res.json(req.body);

}

module.exports.remove =  function remove(req, res) {
    let prd = products.find((u) => u._id == req.params.id);
     prd.isActive=false;

    return res.send("Deleted");
}
   