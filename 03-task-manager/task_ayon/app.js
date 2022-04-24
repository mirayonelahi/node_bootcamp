require("./db/connect");
const express = require("express");
const users = require("./route/user");
require("dotenv").config();
const connectDB = require("./db/connect");
const app = express();
const port = 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("homepage");
});

app.use("/users", users);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, "localhost", () => {
      console.log("running on port 5000");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
