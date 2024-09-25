const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8000;
const hostName = process.env.HOST_NAME || "";

//config template engine
configViewEngine(app);

//simple query
connection.query("select * from Users u", function (err, results, fields) {
  console.log(results);
});

//khai bao route
app.use("/", webRoutes);

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`);
});
