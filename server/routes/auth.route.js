const authController = require("../controllers/authController");
const router = require("express").Router();

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);
router.post("/reset-password", authController.resetPassword);

module.exports = router;