const express = require("express");
const server = express();

server.use((req, res, next) => {
  req.user = {
    id: "1234",
  };
  next();
});

server.get("/", (req, res) => {
  console.log(req.user);
  res.sendFile(__dirname + "/index.html");
});

server.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

server.use((req, res) => {
  res.sendFile(__dirname + "/404.html");
});

server.listen(5000, function (err) {
  if (err) return console.log(err);
  console.log("server on");
});
