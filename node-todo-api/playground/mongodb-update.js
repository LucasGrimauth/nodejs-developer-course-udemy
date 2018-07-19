// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server. Oh :-(");
  }

  console.log("Connected to MongoDB server. Yay :-)");
  const db = client.db("TodoApp");

  // findOneAndUpdate (filter, update, options, callback)
  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5b5094d7ac7592cf90df9712") 
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5b3e4d724eee0c24689a33dd")
  }, {
    $set: {
      name: "Lucas"
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });

  // client.close();
});