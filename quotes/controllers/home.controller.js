const path = require("path");

function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class HomeController {
  async index(req, res) {
    render("home", res);
  }

  async about(req, res) {
    render("about", res);
  }
}

module.exports = new HomeController();
