let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/CommentsController");


router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);
router.put("/comments/:id", update);
router.delete("/comments/:id", remove);

module.exports =  router;