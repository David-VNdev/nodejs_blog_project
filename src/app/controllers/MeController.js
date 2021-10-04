const Course = require("../models/Course");
const { multipleMongooseObject } = require("../../util/mongoose");
class MeController {
  // [GET] /
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
