var express = require("express");
var cookieParser = require("cookie-parser");
const rateLimiter = require("express-rate-limit");
const apicache = require("apicache");
var logger = require("morgan");

var pingRouter = require("./routes/ping");
var postsRouter = require("./routes/posts");

var app = express();

app.use(logger("dev"));

// For limiting the api request first we declare a limiter with time ,max request and custom message
const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after an hour",
});
// use the middleware using the limiter defined above
app.use(limiter);
app.set("trust proxy", 1); // trust first proxy

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// For caching the api request we declare a cache with apicache library
let cache = apicache.middleware;

// for different api request we set cache time accordingly
app.get("/", cache("5 minute"), (_, res) =>
  res.send({ "route 1": "api/ping", "route 2": "api/posts" })
);
app.use("/api/ping", cache("5 minute"), pingRouter);
app.use("/api/posts", cache("5 minute"), postsRouter);

module.exports = app;
