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

app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
     console.log("Web server is now living in apartment 3001");
 });