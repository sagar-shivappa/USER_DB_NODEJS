const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 8000;
const { initializeDB } = require("./utils/initializeDb");

require("dotenv").config();

/* Connecting to the database and then starting the server. */
mongoose
  .connect(process.env.MONGODB_URI + process.env.DB_NAME)
  .then(() => {
    console.log("Connected to MongoDB");
    initializeDB();
    app.listen(
      PORT,
      console.log(`Server started on port http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });
