const router = require("express").Router();
const bookController = require("../controllers/bookController");
const middlewareAuth = require("../middleware/auth");

router.get("/list", bookController.getbook);
router.get("/getall",  bookController.getall);
router.get("/find/:id", bookController.find);
router.post("/create", bookController.create);
router.delete("/:id", bookController.delete);
router.put("/:id", bookController.update);
module.exports = router;
