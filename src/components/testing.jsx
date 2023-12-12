const promise = new Promise((resolve, reject) => {
  console.log('doing a fetch');
  setTimeout(() => resolve('resolved promise'), 1500);
});

console.log(promise);
promise.then((data) => console.log(data));
