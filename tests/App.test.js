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

describe("Logger Middleware", () => {
  it("should fetch student report card check for method in middleware", async () => {
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
    const logSpy = jest.spyOn(global.console, "log");

    const res = await request(app).get("/student/getRecord");
    expect(logSpy).toHaveBeenCalledWith("GET");
  });
  it("should fetch student report card check for request path middleware", async () => {
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
    const logSpy = jest.spyOn(global.console, "log");

    const res = await request(app).get("/student/getRecord");

    expect(logSpy).toHaveBeenCalledWith("/student/getRecord");
  });
});

describe("Error Handling Middleware", () => {
  it("should handle error thrown while fetching students records", async () => {
    const response = await request(app).get("/student/error");

    expect(response.body).toEqual({
      status: "error",
      message: "This is an intentional error!",
    });
  });

  it("should handle error thrown while fetching students records with the ERROR code", async () => {
    const response = await request(app).get("/student/error");
    expect(response.status).toBe(501);
  });
});
