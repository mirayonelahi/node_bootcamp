var express = require("express");
var router = express.Router();

const successInfo = { success: true };

router.get("/", function (req, res, next) {
  res.status(200).send(successInfo);
});

module.exports = router;
