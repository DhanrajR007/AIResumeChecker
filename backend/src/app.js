const express = require("express");
require("dotenv").config();
const authrouter = require("./routes/auth.route");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use("/api/auth", authrouter);

module.exports = app;
