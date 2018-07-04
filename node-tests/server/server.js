const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page not found.",
    name: "Todo App v1.0"
  });
});

app.get("/users", (req, res) => {
  res.send([{ name: "Lucas", age: 23 }, { name: "Thiago", age: 21 }]);
})

app.listen(3000, () => {
  console.log("Starting server on port 3000");
});

module.exports.app = app;