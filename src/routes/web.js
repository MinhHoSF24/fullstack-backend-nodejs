const express = require("express");
const { getHomepage, getMinhHo } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/minhho", getMinhHo);

module.exports = router;
