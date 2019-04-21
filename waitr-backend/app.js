var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
// const cors = require('cors')

var waitrsRouter = require("./routes/waitrs");
var eventsRouter = require("./routes/events");
var addingIdsRouter = require("./routes/addingIds");

var app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

mongoose.connect(
  "mongodb://pcrib:pcrman28@ds145356.mlab.com:45356/heroku_vn7lgslg"
);

// Tell Mongoose to use ES6 Promises for its promises
mongoose.Promise = global.Promise;

// Log to console any errors or a successful connection.
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to db at /waitr-app");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "build/index.html"));
});

app.use("/waitrs", waitrsRouter);
app.use("/events", eventsRouter);
app.use("/addingIds", addingIdsRouter);

module.exports = app;
