const { factorial } = require("./Calculations");

const n = 4;
console.log(`Factorial of ${n} is ${factorial(n)}`);

function loadExternalContent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 2000);
  });
}
async function getContent() {
  const text = await loadExternalContent();
  console.log(text);
}
console.log("it will call function");
getContent();
console.log("it called function");
