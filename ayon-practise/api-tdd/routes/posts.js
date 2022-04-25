var express = require("express");
var router = express.Router();

const successInfo = {
  posts: [
    {
      author: "Jon Abbott",
      authorId: 4,
      id: 95,
      likes: 985,
      popularity: 0.42,
      reads: 55875,
      tags: ["politics", "tech", "health", "history"],
    },
  ],
};
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).send(successInfo);
});

module.exports = router;
