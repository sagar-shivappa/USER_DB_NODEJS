const mongoose = require("mongoose");

const scoreCardSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentID: {
    type: Number,
    required: true,
    unique: true,
  },
  standard: {
    type: String,
    required: true,
  },
  marks: {
    type: Object,
    required: true,
  },
});

const ScoreCard = mongoose.model("ScoreCard", scoreCardSchema);

module.exports = ScoreCard;
