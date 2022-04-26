var express = require("express");
var router = express.Router();
const axios = require("axios").default;

// let successInfo = {
//   posts: [
//     {
//       author: "Jon Abbott",
//       authorId: 4,
//       id: 95,
//       likes: 985,
//       popularity: 0.42,
//       reads: 55875,
//       tags: ["politics", "tech", "health", "history"],
//     },
//   ],
// };
async function getUser(tag) {
  const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/* GET users listing. */
router.get("/", function (req, res, next) {
  //fetch data from api
  const tag = req.query.tag;
  const data = getUser(tag);

  data.then((response) => {
    res.status(200).send(response.data);
  });
});

module.exports = router;
