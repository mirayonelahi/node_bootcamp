const User = require("../model/User");

const getAllUsers = (req, res) => {
  res.send("get all users");
};

const getSingleUser = (req, res) => {
  res.send("single user");
};

const addUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user });
};

const deleteUser = (req, res) => {
  res.send("delete user");
};

const updateUser = (req, res) => {
  res.send("update user");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  addUser,
  deleteUser,
  updateUser,
};
