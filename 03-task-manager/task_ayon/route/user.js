const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  addUser,
  deleteUser,
  updateUser,
} = require("../controller/user");

router.route("/").get(getAllUsers).post(addUser);
router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
