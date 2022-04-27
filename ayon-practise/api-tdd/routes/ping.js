var express = require("express");
var router = express.Router();

const successInfo = { success: true };

router.get("/", function (_, res) {
  res.status(200).send(successInfo);
});

module.exports = router;
