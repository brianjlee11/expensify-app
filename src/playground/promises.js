const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
  }, 1500)
  resolve('This is my resolved data');
});

console.log("before");
promise.then((data) => {
  console.log(data);
})
console.log("after");
