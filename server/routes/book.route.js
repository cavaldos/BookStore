const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/getall", bookController.getall);
router.get("/:id", bookController.find);
router.post("/create", bookController.create);
router.delete("/:id", bookController.delete);
router.put("/:id", bookController.update);

module.exports = router;
