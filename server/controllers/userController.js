const registeredUsers = require("../models/registeredUsers");

exports.getUserById = (req, res) => {
    const userId = req.params.ID;
    console.log(userId);
    registeredUsers.findById(userId)
    
        .then(user => res.json(user ? user.name : "User not found"))
        .catch(() => res.json("Problem at param get users Express."));
};
