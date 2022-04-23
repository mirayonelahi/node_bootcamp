const getAllUsers = (req, res) => {
  res.send("get all users");
};

const getSingleUser = (req, res) => {
  res.send("get single user");
};

const addUser = (req, res) => {
  res.send("add user");
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
