const express = require("express");
const {
  getHomepage,
  getMinhHo,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/minhho", getMinhHo);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
