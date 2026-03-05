const express = require("express");
require("dotenv").config();
const authrouter = require("./routes/auth.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authrouter);

module.exports = app;
