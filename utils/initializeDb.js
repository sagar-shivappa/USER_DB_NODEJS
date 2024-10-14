const ScoreCard = require("../models/scoreCardModel");

const initializeDB = async () => {
  const scoreCard = await ScoreCard.find();
  if (scoreCard.length != 0) {
    return;
  }
  const studentsArray = [
    {
      studentName: "John Doe M",
      studentID: 1,
      standard: "2nd",
      marks: {
        english: 24,
        science: 23,
        mathematics: 30,
      },
    },
    {
      studentName: "Mahesh",
      studentID: 2,
      standard: "2nd",
      marks: {
        english: 14,
        science: 13,
        mathematics: 20,
      },
    },
  ];
  studentsArray.forEach(async (e) => {
    let newReport = new ScoreCard(e);
    await newReport.save();
  });
};

module.exports = {
  initializeDB,
};
