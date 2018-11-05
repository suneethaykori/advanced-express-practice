const contacts = require("../contacts");

module.exports.list =  function list(request, response) {
    return response.json(contacts);
   }
   module.exports.show =  function show(req, res) {
    let con = contacts.find((u) => u._id == req.params.id);
    return res.json(con);
   }
   module.exports.create =  function create(req, res) {
    const myid = parseInt(contacts[contacts.length-1]._id)+1;
    contacts.push(req.body);
   console.log(req);
   contacts[contacts.length-1]._id=myid;
   return res.json(req.body);
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
   