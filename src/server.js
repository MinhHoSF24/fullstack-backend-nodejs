const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;
const hostName = process.env.HOST_NAME || "";

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/minhho", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`);
});
