const registeredUsers = require("../models/registeredUsers");

exports.register = (req, res) => {
    registeredUsers.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.json("Email already registered.");
            } else {
                const newUser = new registeredUsers(req.body);
                newUser.save()
                    .then(() => res.json("Input stored in DB successfully."))
                    .catch(() => res.json("Data cannot be saved, problem at saving time."));
            }
        })
        .catch(() => res.json("Registration problem."));
};

exports.login = (req, res) => {
    registeredUsers.findOne({ email: req.body.email })
        .then(user => {
            if (user && user.cnfPassword === req.body.password) {
                res.json({ status: "success", id: user._id ,name: user.name});
            } else {
                res.json({ status: "fail" });
            }
        })
        .catch(() => res.json({ status: "noUser" }));
};
