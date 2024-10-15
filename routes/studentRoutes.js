const express = require("express");
const ScoreCard = require("../models/scoreCardModel");
const router = express.Router();

// Create a new report
router.post("/addReport", async (req, res) => {
  // write the logic here
});

// Fetch student report by Student ID
router.get("/getRecord/:studentID", async (req, res) => {
  //write the logic here
});

module.exports = router;
