const express = require("express");
const studentRoute = require("./routes/studentRoutes.js");
const { logger } = require("./middleware/logger.js");
const { Errorhandler } = require("./middleware/error.handler.js");

const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

// Add the logger middleware

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

app.use("/student", studentRoute);

//Add error handler middleware

module.exports = app;
