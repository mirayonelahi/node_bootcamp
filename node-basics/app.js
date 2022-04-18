const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  if (req.url === "/") {
    path += "index.html";
    res.statusCode = 200;
  } else if (req.url === "/about") {
    path += "about.html";
    res.statusCode = 200;
  } else {
    path += "404.html";
    res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("<h1>Error 404</h1>");
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("server is running at 3000");
});
