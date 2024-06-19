const mongoose = require("mongoose");

const modelEmployeeRegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    course: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("modelEmployeeRegister", modelEmployeeRegisterSchema);
