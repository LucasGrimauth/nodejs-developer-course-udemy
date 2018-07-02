console.log("Starting app");

setTimeout(() => {
  console.log("First");
}, 1000);

setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Finishing app");