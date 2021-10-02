const newsRouter = require("./news");
const siteRouter = require("./site");
const cousrseRouter = require("./courses");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", cousrseRouter);
  app.use("/", siteRouter);
}

module.exports = route;
