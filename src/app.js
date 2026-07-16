const express = require("express");

const app = express();

// File Imports
const indexRoute = require("./routes/index");
const authRoutes = require("./routes/auth.routes");
const errorMidlleware = require("./middlewares/error.middleware");

app.use(express.json());

app.use("/", indexRoute);
app.use("/api/v1/auth", authRoutes);

// error middleware
app.use(errorMidlleware);

module.exports = app;
