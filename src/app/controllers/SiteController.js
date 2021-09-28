class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
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
