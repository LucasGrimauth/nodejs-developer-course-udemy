const { ObjectID } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");


// Todo.remove({}).then(result => {
//   console.log(result)
// })

// Todo.findOneAndRemove

Todo.findByIdAndRemove("5b5f4cede8f89bd6d06c30de").then(todo => {
  console.log(todo);
});