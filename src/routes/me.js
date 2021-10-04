var express = require("express");
var router = express.Router();

// courseController.index
const meController = require("../app/controllers/MeController");
router.get("/stored/courses", meController.storedCourses);

module.exports = router;
