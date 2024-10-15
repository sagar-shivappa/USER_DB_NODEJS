const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const ScoreCard = require("../models/scoreCardModel.js");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

afterEach(async () => {
  await ScoreCard.deleteMany(); // Clear the database between tests
});

describe("Student Report Card API", () => {
  it("should create a new Report Card", async () => {
    const newReportCard = {
      studentName: "Sundar",
      studentID: 4,
      standard: "2nd",
      marks: {
        english: 24,
        science: 23,
        mathematics: 30,
      },
    };
    const res = await request(app)
      .post("/student/addReport")
      .send(newReportCard);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Created Student Report");
  });

  it("should throw error for invalid request", async () => {
    const newReportCard = {
      studentName: "Sundar",
      studentID: 4,
      standard: "2nd",
    };
    const res = await request(app)
      .post("/student/addReport")
      .send(newReportCard);
    expect(res.statusCode).toBe(400);
  });

  it("should fetch student report card using valid student ID", async () => {
    const studentCard = new ScoreCard({
      studentName: "Sundar",
      studentID: 5,
      standard: "2nd",
      marks: {
        english: 24,
        science: 23,
        mathematics: 30,
      },
    });

    await studentCard.save();

    const res = await request(app).get("/student/getRecord/5");
    expect(res.statusCode).toBe(200);
    expect(res.body.studentName).toBe("Sundar");
    expect(res.body.standard).toBe("2nd");
  });

  it("should fetch student report card using valid student ID", async () => {
    const studentCard = new ScoreCard({
      studentName: "Sundar",
      studentID: 5,
      standard: "2nd",
      marks: {
        english: 24,
        science: 23,
        mathematics: 30,
      },
    });

    await studentCard.save();

    const res = await request(app).get("/student/getRecord/55");
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("Invalid Student ID");
  });
});
