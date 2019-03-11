const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  { join } = require("path");
const app = express();

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});
