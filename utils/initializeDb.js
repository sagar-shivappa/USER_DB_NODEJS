const User = require("../models/userModel");

const initializeDB = async () => {
  const users = await User.find();
  if (users.length != 0) {
    return;
  }
  const usersArray = [
    {
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      age: 25,
    },
  ];
  usersArray.forEach(async (e) => {
    let newUser = new User(e);
    await newUser.save();
  });
};

module.exports = {
  initializeDB,
};
