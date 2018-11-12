let express = require("express");
const bodyParser = require('body-parser');
let ContactRoutes  = require("./routes/ContactRoutes");
let CommentRoutes  = require("./routes/CommentRoutes");
let ProductsRouters  = require("./routes/ProductsRouters");
let VehiclesRouters  = require("./routes/VehiclesRouters");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://sykori:corsair1@ds053774.mlab.com:53774/expresspractice");


const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));
app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(ProductsRouters);
app.use(VehiclesRouters);


const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");



// app.get("/comments", function(req,res,next){
//     return res.json(comments);

// });

// app.get("/comments/:id", function(req,res,next){
//     let cmt = comments.find((u) => u._id == req.params.id);
//     return res.json(cmt);

// });

// app.post("/comments",function(req,res){
//     const myid = parseInt(comments[comments.length-1]._id)+1;
//     comments.push(req.body);
//    console.log(req);
//    comments[comments.length-1]._id=myid;
//    return res.json(req.body);
//  })


// app.get("/products", function(req,res,next){
//     return res.json(products);

// });

// app.get("/products/:id", function(req,res,next){
//     let prd = products.find((u) => u._id == req.params.id);
//     return res.json(prd);

// });

// app.post("/products",function(req,res){
//     const myid = parseInt(products[products.length-1]._id)+1;
//     products.push(req.body);
//    console.log(req);
//    products[products.length-1]._id=myid;
//    return res.json(req.body);
//  })

// app.get("/vehicles", function(req,res,next){
//     return res.json(vehicles);

// });

// app.get("/vehicles/:id", function(req,res,next){
//     let veh = vehicles.find((u) => u._id == req.params.id);
//     return res.json(veh);

// });

// app.post("/vehicles",function(req,res){
//     const myid = parseInt(vehicles[vehicles.length-1]._id)+1;
//     vehicles.push(req.body);
//    console.log(req);
//    vehicles[vehicles.length-1]._id=myid;
//    return res.json(req.body);
//  })


// app.get("/contacts", function(req,res,next){
//     return res.json(contacts);

// });

// app.get("/contacts/:id", function(req,res,next){
//     let con = contacts.find((u) => u._id == req.params.id);
//     return res.json(con);

// });

// app.post("/contacts",function(req,res){
//     const myid = parseInt(contacts[contacts.length-1]._id)+1;
//     contacts.push(req.body);
//    console.log(req);
//    contacts[contacts.length-1]._id=myid;
//    return res.json(req.body);
//  })


app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
     console.log("Web server is now living in apartment 3001");
 });