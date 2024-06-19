const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./config/db");
db.connect();


app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/employee", employeeRoutes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
