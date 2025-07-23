const express = require("express");
const port = 2300;
const app = express();

app.set(`view engine`, `ejs`);

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/about", (req, res) => {
  return res.render("about");
});

app.get("/blog", (req, res) => {
  return res.render("blog");
});

app.get("/contact", (req, res) => {
  return res.render("contact");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`server running on port` + port);
});
