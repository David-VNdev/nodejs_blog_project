const Course = require("../models/Course");
const { multipleMongooseObject } = require("../../util/mongoose");
class SiteController {
  // [GET] /
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) res.json(courses);
    //   else {
    //     res.status(400).json({ error: "ERROR!!!" });
    //   }
    // });

    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseObject(courses) });
      })
      .catch(next);
    // res.render("home");
  }

  // [GET]/ search

  search(req, res) {
    res.render("search");
  }

  // app.get("/", function (req, res) {
  //   res.render("home");
  // });

  // app.get("/search", function (req, res) {
  //   res.render("search");
  // });

  // //   app.get("/news", function (req, res) {
  // //     res.render("search");
  // //   });

  // app.post("/search", function (req, res) {
  //   console.log(req.body);
  //   res.send("");
  // });
}

module.exports = new SiteController();
