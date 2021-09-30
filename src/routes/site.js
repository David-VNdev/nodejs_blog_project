var express = require("express");
var router = express.Router();

// newsController.index
const siteController = require("../app/controllers/SiteController");
router.get("/:slug", siteController.search);
router.get("/", siteController.index);

module.exports = router;
