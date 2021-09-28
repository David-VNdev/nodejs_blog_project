var express = require("express");
var router = express.Router();

// newsController.index
const newsController = require("../app/controllers/NewsController");
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
