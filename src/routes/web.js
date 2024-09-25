const express = require("express");
const {
  getHomepage,
  getMinhHo,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  updateCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/minhho", getMinhHo);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", updateCreateUser);

module.exports = router;
