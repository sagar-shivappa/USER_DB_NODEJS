const express = require("express");
const User = require("../models/userModel.js");
const router = express.Router();

// Create a new user
router.post("/users", async (req, res) => {
  // write the logic here
});

// Fetch all users
router.get("/users", async (req, res) => {
  // write the logic here
});

module.exports = router;
