const express = require("express");
const server = express();

const fs = require("fs");

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

server.get("/", (req, res) => {
  res.write(home);
});

server.get("/about", (req, res) => {
  res.write(about);
});

server.listen(3000, () => {
  console.log("Server is running on port: " + 3000);
});
