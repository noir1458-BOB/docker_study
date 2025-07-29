const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>hello,express</h1>");
  //res.render("index.html");
});

app.listen(3000, () => {
  console.log("server is ready .........");
});
