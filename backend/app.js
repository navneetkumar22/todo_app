require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/database");
const todoRoutes = require("./routes/todoRoutes")
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", todoRoutes);


connectToDB();

module.exports = app;