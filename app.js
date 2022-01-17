const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const route = require("./route");
const { create } = require("express-handlebars");
const session = require("express-session");
// const bodyParser = require("body-parser");
const passport = require("./middleware/passport");

const cf = require('./middleware');
const db = require('./middleware/mongoose');


db.connect();

// const port = 3000;

const app = express();

// hbs
const hbs = create({
    // Specify helpers which are only registered on this instance.
    extname: ".hbs",
    helpers: {
      getValue: (obj, idx) => obj[idx],
      sum: (a, b) => a + b,
      length: (obj) => obj.length,
      increase: (n) => n + 1,
      compare: (a, b) => a === b,
      getPage: (total, limit) => (total % limit) + 1,
      for: function (from, to, incr, block) {
        let accum = "";
        for (let i = from; i <= to; i += incr) accum += block.fn(i);
        return accum;
      },
      numberWithCommas: (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      caps: (str) =>
        str
          .split(" ")
          .map((item) => item[0].toUpperCase() + item.slice(1))
          .join(" "),
    },
  });
app.engine("hbs", hbs.engine);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(logger("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
session({
    secret: "my-super-secret-key",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
})
); // user should login after 2 hour
app.use(passport.initialize());
app.use(passport.session());

route(app);

cf.cf(app);