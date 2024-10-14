const express = require("express");
const ScoreCard = require("../models/scoreCardModel");
const router = express.Router();

// Create a new report
router.post("/addReport", async (req, res) => {
  try {
    const addScore = new ScoreCard(req.body);
    await addScore.save();
    res.status(201).json({ message: "Created Student Report" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Fetch student report by Student ID
router.get("/getRecord/:studentID", async (req, res) => {
  try {
    const score = await ScoreCard.findOne({
      studentID: req.params.studentID,
    });
    if (score) {
      res.status(200).json(score);
    } else {
      res.status(404).send({ message: "Invalid Student ID" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
