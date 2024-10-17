const express = require("express");
const ScoreCard = require("../models/scoreCardModel");
const router = express.Router();

// Fetch student records
router.get("/getRecord", async (req, res) => {
  const score = await ScoreCard.find({});
  if (score) {
    res.status(200).json(score);
  } else {
    res.status(404).send({ message: "No students found" });
  }
});

router.get("/error", async (req, res, next) => {
  const error = new Error("This is an intentional error!");
  next(error);
});

module.exports = router;
