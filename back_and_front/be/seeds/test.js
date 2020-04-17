const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://juancp101:juancp101@cluster0-w5pol.mongodb.net/codingapp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
