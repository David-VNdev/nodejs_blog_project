const Course = require("../models/Course");
const { multipleMongooseObject } = require("../../util/mongoose");
const { NULL } = require("node-sass");
class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseObject(courses),
        });
      })
      .catch(next);
  }

// [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted()
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: multipleMongooseObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
