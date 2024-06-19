const mongoose = require("mongoose");

module.exports.connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/loginCredentials", { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection
        .once("open", () => { console.log("Connected to DB..."); })
        .on("error", (error) => { console.error("Problem connecting to DB:", error); });
};
