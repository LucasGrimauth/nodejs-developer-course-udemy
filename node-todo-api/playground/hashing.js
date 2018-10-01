const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var password = "wordpass";

// bcrypt.genSalt(10, (err, salt) => {
//   console.log(salt);
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = "$2a$10$CuAm0FAe4xp3DCfoQ6J6a.YFo59o3Y6VVYnpidNpRtEQdKsHxj5vW";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})

// var data = {
//   id: 10
// };

// var token = jwt.sign(data, "secret");
// console.log(token);

// var decoded = jwt.verify(token, "secret");
// console.log(decoded);

// var message = "I am user number 3";

// var hash = SHA256(message).toString();

// console.log(`Message ${message}`);
// console.log(`Hash ${hash}`);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "secret").toString()
// }

// // Change data wihout knowing secret
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + "secret").toString();

// if(resultHash === token.hash) {
//   console.log("Data was not changed");
// } else {
//   console.log("Data was changed, do not trust!");
// }