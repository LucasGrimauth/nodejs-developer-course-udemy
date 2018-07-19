// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server. Oh :-(");
  }

  console.log("Connected to MongoDB server. Yay :-)");
  const db = client.db("TodoApp");

  // deleteMany
  // db.collection("Todos").deleteMany({ text: "Eat lunch" }).then(result => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection("Todos").deleteOne({ text: "Eat lunch" }).then(result => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection("Todos").findOneAndDelete({ completed: false }).then(result => {
  //   console.log(result);
  // });

  // db.collection("Users").deleteMany({ name: "Lucas" });

  // db.collection("Users").findOneAndDelete({ _id: new ObjectID("5b3e4db876e60e3c2ced9e3d")})
  //  .then((result => console.log(JSON.stringify(result, undefined, 2))));

  // client.close();
});