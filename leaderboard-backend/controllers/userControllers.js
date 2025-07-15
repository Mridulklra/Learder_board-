const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  const user = await User.create({ name });
  res.status(201).json(user);
};
