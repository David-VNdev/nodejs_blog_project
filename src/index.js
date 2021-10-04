const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const db = require("./config/db");
const port = 3000;
const methodOvveride = require("method-override");
//Connect to DB
db.connect();

// My route function
const route = require("./routes");
// HTTP Logger
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOvveride("_method"));
// Template engine

app.engine(
  "hbs",
  handlebars({ extname: ".hbs", helpers: { sum: (a, b) => a + b } })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route()

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Command to start mongodb

// To run MongoDB (i.e. the mongod process) as a macOS service, run:

// brew services start mongodb-community@5.0

// To stop a mongod running as a macOS service, use the following command as needed:

// brew services stop mongodb-community@5.0

// To run MongoDB (i.e. the mongod process) manually as a background process, run:

// For macOS running Intel processors:

// mongod --config /usr/local/etc/mongod.conf --fork

// For macOS running on Apple M1 processors:

// mongod --config /opt/homebrew/etc/mongod.conf --fork
