const contacts = require("../contacts");

let UserModel = require("../models/ContactModels");

module.exports.list =  function list(request, response) {
    UserModel.find({}).exec()
    .then(c => {
    return response.json(c);
    });
}


module.exports.show =  function show(req, res) {
    UserModel.findById(req.params.id).exec()
    .then(com => {
        return res.json(com);
    });
}

module.exports.create =  function create(req, res) {
    const newC= new UserModel();

    newC.name = req.body.name;
    newC.occupation = req.body.occupation;
    newC.avatar = req.body.avatar;
    newC.save().then(savedC => {
        console.log(savedC);
      });
}

module.exports.update =  function update(req, res) {
    let con = contacts.find((u) => u._id == req.params.id); 
    for (let property1 in con) {
        con[property1]= req.body[property1];
      }
      return res.json(req.body);

}

module.exports.remove =  function remove(req, res) {
    let con = contacts.find((u) => u._id == req.params.id);
     con.isActive=false;

    return res.send("Deleted");
}
   