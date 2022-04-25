const express = require("express");
const router = express.Router();
const { getLogin, getDashboard } = require("../controllers/main");

router.route("/dashboard").get(getDashboard);
router.route("/login").post(getLogin);

module.exports = router;
