const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  { join } = require("path"),
  session = require("express-session"),
  passport = require("passport"),
  User = require("./db/UserModel.js"),
  user = require("./routes/user.js"),
  api = require("./routes/api.js");
const connectionDB = require("./db/database.js");
const app = express();
// let api = require('./routes/api.js')
//let user = require('./routes/user.js')
let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    key: "user_sid",
    secret: "niceSecretBTW",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(["/", "/signup", "/login"], (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.use("/api", api);
app.use("/user", user);
