const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const User = require("../models/userModel.js");

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
  await User.deleteMany(); // Clear the database between tests
});

describe("User API", () => {
  it("should create a new user", async () => {
    const newUser = { name: "John Doe", email: "john@example.com", age: 30 };
    const res = await request(app).post("/api/users").send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("John Doe");
    expect(res.body.email).toBe("john@example.com");
    expect(res.body.age).toBe(30);
  });

  it("should throw 400 error when adding a new user", async () => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    const res = await request(app).post("/api/users").send(newUser);
    expect(res.statusCode).toBe(400);
    // expect(res.body.name).toBe('John Doe');
    // expect(res.body.email).toBe('john@example.com');
    // expect(res.body.age).toBe(30);
  });

  it("should fetch all users", async () => {
    const user1 = new User({
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    });
    const user2 = new User({
      name: "Jane Doe",
      email: "jane@example.com",
      age: 25,
    });
    await user1.save();
    await user2.save();

    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0].name).toBe("John Doe");
    expect(res.body[1].name).toBe("Jane Doe");
  });

  it("should not create a user with invalid data", async () => {
    const invalidUser = { name: "", email: "invalidemail", age: -5 };
    const res = await request(app).post("/api/users").send(invalidUser);
    expect(res.statusCode).toBe(400);
  });
});
