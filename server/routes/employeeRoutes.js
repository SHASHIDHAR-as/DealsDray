const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const upload = require("../middlewares/multerConfig");

router.post("/create-emp", upload.single("image"), employeeController.createEmployee);
router.get("/get-emps", employeeController.getEmployeeList);
router.get("/edit/:ID", employeeController.getEmployeeById);
router.put("/edit/:ID", upload.single("image"), employeeController.updateEmployeeById);
router.delete("/:ID", employeeController.deleteEmployeeById);

module.exports = router;
