let express =  require("express");
const router = express.Router();

let {list,show,create,update,remove} = require( "../controllers/VehiclesController");


router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.put("/vehicles/:id", update);
router.delete("/vehicles/:id", remove);

module.exports =  router;