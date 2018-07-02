var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Args must be numbers -_-");
      }
    }, 1500);
  }); 
}

asyncAdd(5, "7").then((res) => {
  console.log("Result: ", res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log("Should be 45: ", res);
}).catch(error => {
  console.log(error);
});

// var somePromise =  new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey, it worked <:-D");
//     // reject("It didn't work :-( sadly")
//   }, 3000);
// });

// somePromise.then((message) => {
//   console.log("Success: ", message);
// }, (errorMessage) => {
//   console.log("Error: ", errorMessage);
// });