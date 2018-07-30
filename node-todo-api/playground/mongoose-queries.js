const { ObjectID } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

// var id = "5b5f2b7fb360262d604e77b8";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");  
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// })

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// })

// Todo.findById(id).then(todo => {
//   if(!todo) {
//     return console.log("id not found");
//   }
//   console.log("Todo by id", todo)}
// ).catch(e => console.log(e));

User.findById("5b50e4087d95712fdc3d00de").then(user => {
  if(!user) {
    return console.log("id not found");
  }
  console.log("user by id", user)}
).catch(e => console.log(e));