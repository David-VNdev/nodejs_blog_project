const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
const db = require("./config/db");

//Connect to DB
db.connect();

// My route function
const route = require("./routes");
// HTTP Logger
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template engine

app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route()

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// mongod --dbpath=/Users/user/data/db
