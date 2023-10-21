let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20)
  }, 2 * 1000)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30)
  }, 3 * 1000)
})

Promise.all([p1, p2, p3]).then((res) => {
  const total = res.reduce((p, c) => p + c);

  console.log("Result : ",res);
  console.log("Total : ",total);
})
