const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:ID", userController.getUserById);

module.exports = router;
