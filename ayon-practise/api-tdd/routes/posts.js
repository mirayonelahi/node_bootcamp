var express = require("express");
var router = express.Router();
const axios = require("axios").default;

const errorInfo = {
  tag: { error: "Tags parameter is required" },
  sortBy: { error: "sortBy parameter is invalid" },
  direction: { error: "direction parameter is invalid" },
};
router.get("/", async function (req, res) {
  const { tags, sortBy, direction } = req.query;
  const sortByOptions = ["id", "reads", "likes", "popularity", "", undefined];
  const directionOptions = ["asc", "desc", "", undefined];

  if (sortByOptions.indexOf(sortBy) === -1) {
    return res.status(400).send(errorInfo.sortBy);
  }

  if (directionOptions.indexOf(direction) === -1) {
    return res.status(400).send(errorInfo.direction);
  }
  if (!tags) {
    return res.status(400).send(errorInfo.tag);
  }
  const allTag = tags.split(",");

  // fetching all tags from the api
  const requests = allTag.map((tag) =>
    axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`)
  );

  const getUniqueData = async () => {
    // making parallel or concurrent api call
    const result = await Promise.all(requests);
    let data = [];
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

  return res.send({ posts: finalData });
});

module.exports = router;
