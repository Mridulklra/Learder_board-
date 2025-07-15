const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

exports.claimPoints = async (req, res) => {
  const { userId } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.totalPoints += points;
  await user.save();

  await ClaimHistory.create({ userId, points });

  res.json({ userId, points, totalPoints: user.totalPoints });
};

exports.getHistory = async (req, res) => {
  const history = await ClaimHistory.find().populate("userId", "name");
  res.json(history);
};
