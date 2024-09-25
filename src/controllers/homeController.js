const connection = require("../config/database");

const getHomepage = (req, res) => {
  let user = [];
  connection.query("select * from Users u", function (err, results, fields) {
    user = results;
    console.log(results);

    console.log(">>> check user: ", user);
    res.send(JSON.stringify(user));
  });
};

const getMinhHo = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getMinhHo,
};
