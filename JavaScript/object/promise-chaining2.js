let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 1000 * 3)
})

p.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2);
    }, 1000 *3)
  })
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 3);
    }, 1000 *3)
  })
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 4);
    }, 1000 *3)
  })
})
