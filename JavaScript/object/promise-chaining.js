let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  },100 * 3)
})

p.then((result) => {
  console.log(result);
  return result * 2;
})
  .then((result) => {
    console.log(result);
    return result * 3;
  })
  .then((result) => {
    console.log(result);
    return result * 4
  })

// Other way
function generateNum(num){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 1000)
  })
}

  generateNum(10)
  .then((res) => {
    console.log(res);
    return generateNum(res * 2);
  })
  .then((res) => {
    console.log(res);
    return generateNum(res * 3);
  })
  .then((res) => {
    console.log(res);
    return generateNum(res * 4);
  })
