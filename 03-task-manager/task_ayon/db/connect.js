const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://ayon:ayon1533@basictest.xf3y9.mongodb.net/Test?retryWrites=true&w=majority";

const connectDB = (url) => {
  mongoose.connect(url);
};

module.exports = connectDB;
