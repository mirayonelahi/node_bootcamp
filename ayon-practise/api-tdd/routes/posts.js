var express = require("express");
var router = express.Router();
const axios = require("axios").default;

// saving all error messages in a variable
const errorInfo = {
  tag: { error: "Tags parameter is required" },
  sortBy: { error: "sortBy parameter is invalid" },
  direction: { error: "direction parameter is invalid" },
};

const URL = "https://api.hatchways.io/assessment/blog/posts?tag=";

// setting up all the logics for /api/posts with multiple query parameters
router.get("/", async function (req, res) {
  // getting all the query parameters
  const { tags, sortBy, direction } = req.query;

  // setting all possible valid parameters for sortBy and direction
  const sortByOptions = ["id", "reads", "likes", "popularity", "", undefined];
  const directionOptions = ["asc", "desc", "", undefined];

  // if any invalid response is received we send the error message

  if (sortByOptions.indexOf(sortBy) === -1) {
    return res.status(400).send(errorInfo.sortBy);
  }

  if (directionOptions.indexOf(direction) === -1) {
    return res.status(400).send(errorInfo.direction);
  }
  if (!tags) {
    return res.status(400).send(errorInfo.tag);
  }

  // make the string of tags to an array
  const allTag = tags.split(",");

  // fetching all tags from the api
  const requests = allTag.map((tag) => axios.get(URL + tag));

  const getUniqueData = async () => {
    // making parallel or concurrent api call
    const result = await Promise.all(requests);
    let data = [];
    // after making all concurrent api call and getting the responses and filter the data to get unique data
    result.map((response) => {
      const { posts } = response.data;
      const uniquePosts = posts.filter((post) => {
        return data.every((item) => item.id !== post.id);
      });

      data.push(...uniquePosts);
    });
    return data;
  };

  const finalData = await getUniqueData();

  if (sortBy) {
    switch (sortBy) {
      case "reads":
        direction === "asc"
          ? finalData.sort((a, b) => a.reads - b.reads)
          : finalData.sort((a, b) => b.reads - a.reads);
        break;
      case "likes":
        direction === "asc"
          ? finalData.sort((a, b) => a.likes - b.likes)
          : finalData.sort((a, b) => b.likes - a.likes);
        break;
      case "popularity":
        direction === "asc"
          ? finalData.sort((a, b) => a.popularity - b.popularity)
          : finalData.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        direction === "asc"
          ? finalData.sort((a, b) => a.id - b.id)
          : finalData.sort((a, b) => b.id - a.id);
    }
  }

  return res.status(200).send({ posts: finalData });
});

module.exports = router;
