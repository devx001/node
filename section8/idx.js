const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

http
  .createServer((request, response) => {
    const { url } = request;
    response.writeHead(200, { "Content-Type": "text/html" });
    if (url === "/") {
      response.write(home);
    } else if (url === "/about") {
      response.write(about);
    } else {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("Page not found");
    }
    response.end();
  })
  .listen(3000);
