const path = require("path");
const express = require("express");
const ejs = require("ejs");
const pageInfo = require("./pageInfo");

const app = express();

// Moment Module
const moment = require("moment");
const year = "YYYY";

app.locals.moment = require("moment");
app.locals.year = year;

app.set("view engine", "ejs");

// Middleware required as of Express 4.x
app.use(express.urlencoded({ extended: false }));

// Endpoints

app.get("/", function(req, res) {
  res.render("index", pageInfo.index);
});

app.get("/about", function(req, res) {
  res.render("about", pageInfo.about);
});

app.get("/resources", function(req, res) {
  res.render("resources", pageInfo.resources);
});

app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
  res.status(404);
  res.send("404: File Not Found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
