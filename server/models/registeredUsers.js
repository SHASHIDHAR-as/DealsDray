const mongoose = require("mongoose");

const registeredUsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cnfPassword: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("registeredUsers", registeredUsersSchema);
