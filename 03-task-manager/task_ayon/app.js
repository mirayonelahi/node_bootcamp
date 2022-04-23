const express = require("express");
const users = require("./route/user");
const app = express();

app.get("/", (req, res) => {
  res.send("homepage");
});

app.use("/users", users);

app.listen(4000, "localhost", () => {
  console.log("running on port 4000");
});
