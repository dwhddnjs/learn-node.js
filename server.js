const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>hihi</h1>");
});

server.get("/host", (req, res) => {
  res.send("<h1>we got a host</h1>");
});

server.listen(5000, function (err) {
  if (err) return console.log(err);
  console.log("server on");
});
