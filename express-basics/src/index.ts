import { log } from "console";
import express from "express";
const app = express();
const port = process.env.port || 3000;
const path = __dirname.split("/");
path.pop();
app.get("/", (_, res) => {
  res.sendFile("./views/index.html", { root: path.join("/") });
});
app.listen(port, () => console.log(`Running on port ${port}`));
