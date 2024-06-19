const modelEmployeeRegister = require("../models/modelEmployeeRegister");

exports.createEmployee = (req, res) => {
    console.log("Received request body:", req.body);
    console.log("Received file:", req.file);

    modelEmployeeRegister.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.status(400).json("Email already registered.");
            } else {
                const newEmployee = new modelEmployeeRegister({
                    ...req.body,
                    image: req.file ? req.file.filename : null
                });
                newEmployee.save()
                    .then(() => res.json("Input stored in DB successfully."))
                    .catch(error => {
                        
                        res.status(500).json("Data cannot be saved, problem at saving time.");
                    });
            }
        })
        .catch(error => {
          
            res.status(500).json("Registration problem.");
        });
};

exports.getEmployeeList = (req, res) => {
    modelEmployeeRegister.find()
        .then(employees => res.json(employees))
        .catch(() => res.json("Error retrieving employee list."));
};

exports.getEmployeeById = (req, res) => {
    const employeeId = req.params.ID;
    modelEmployeeRegister.findById(employeeId)
        .then(employee => res.json(employee))
        .catch(() => res.json("Employee not found"));
};

exports.updateEmployeeById = (req, res) => {
    const employeeId = req.params.ID;
    modelEmployeeRegister.findByIdAndUpdate(employeeId, req.body, { new: true })
        .then(() => res.json("Successfully updated data"))
        .catch(() => res.json("Error updating employee data."));
};

exports.deleteEmployeeById = (req, res) => {
    const employeeId = req.params.ID;
    modelEmployeeRegister.findByIdAndDelete(employeeId)
        .then(() => res.json("User deleted."))
        .catch(() => res.json("Problem at deletion."));
};
