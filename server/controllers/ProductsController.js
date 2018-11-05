const products = require("../products");

module.exports.list =  function list(request, response) {
    return response.json(products);
   }
   module.exports.show =  function show(req, res) {
    let prd = products.find((u) => u._id == req.params.id);
    return res.json(prd);
   }
   module.exports.create =  function create(req, res) {
    const myid = parseInt(products[products.length-1]._id)+1;
    products.push(req.body);
   console.log(req);
   products[products.length-1]._id=myid;
   return res.json(req.body);
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
   