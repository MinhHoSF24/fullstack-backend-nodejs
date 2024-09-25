const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getMinhHo = (req, res) => {
  return res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  // connection.query(
  //   `insert into Users(email, name, city)
  //   values(?,?,?) `,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user succeed!");
  //   }
  // );
  let [results, fields] = await connection.query(
    `insert into Users(email, name, city)
    values(?,?,?) `,
    [email, name, city]
  );

  console.log(">>>>> check results: ", results);
  res.send("Created User succeed !");

  // const [results, fields] = await connection.query("select * from Users");
  // console.log(results);
};

const updateCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { user: user });
};

module.exports = {
  getHomepage,
  getMinhHo,
  postCreateUser,
  getCreatePage,
  updateCreateUser,
  getUpdatePage,
};
