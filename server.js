const express = require("express");
const hbs = require("express-handlebars");

const server = express();

server.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout.hbs",
    partialsDir: "partials",
  })
);

server.set("view engine", "hbs");
server.use(express.static(__dirname + "/public"));

server.listen(5000, function (err) {
  if (err) return console.log(err);
  console.log("server on");
});
