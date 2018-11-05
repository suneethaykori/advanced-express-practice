const comments = require("../comments");


module.exports.list =  function list(request, response) {
    return response.json(comments);
   }
   module.exports.show =  function show(req, res) {
    let cmt = comments.find((u) => u._id == req.params.id);
    return res.json(cmt);
   }
   module.exports.create =  function create(req, res) {
    const myid = parseInt(comments[comments.length-1]._id)+1;
    comments.push(req.body);
   console.log(req);
   comments[comments.length-1]._id=myid;
   return res.json(req.body);
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
   