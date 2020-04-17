const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
const { BreakinNew } = require("./models");

mongoose.connect(MONGO_URI, { useNewUrlParser: true });

cron.schedule("*/1 * * * *", async () => {
  console.log("Cron is executing!!");

  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const titles = $(".news__title");
  titles.each((index, element) => {
    const breakingNew = {
      title: $(element).text().trim(),
      link: $(element).children().attr("href"),
    };
    BreakinNew.create([breakingNew]);
  });
});

/*
const Cat = mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "Garfield" });
kitty.save().then(() => console.log("Cat has been saved !!!"));
Cat.find().then(console.log);
*/
