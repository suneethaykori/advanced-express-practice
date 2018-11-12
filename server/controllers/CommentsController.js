const comments = require("../comments");
let UserModel = require("../models/CommentModels");

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
   module.exports.create =  function create(request, response) {
    const newComment= new UserModel();

    newComment.body = request.body.body;

    newComment.save().then(savedUser => {
        console.log(savedUser);
      });
  }
   module.exports.update =  function update(req, res) {
    let comm= comments.find((u) => u._id == req.params.id); 
    for (let property1 in comm) {
        comm[property1]= req.body[property1];
      }
      return res.json(req.body);
   }
   module.exports.remove =  function remove(req, res) {
    let comm = comments.find((u) => u._id == req.params.id);
     comm.isActive=false;

    return res.send("Deleted");
   }
   