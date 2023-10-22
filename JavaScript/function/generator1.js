function* generator(){
  console.log("Executing the 1st statement");
  yield 1;
  console.log("Executing the 2nd statement");
  yield 2;
}
let result = generator(); //Object [Generator] {}
let res = result.next();//Executed for the first time
console.log(res)    //{ value: 1, done: false }

res = result.next();//Executed for thr 2nd time
console.log(res)//{ value: 2, done: false }

res = result.next();
console.log(res);//{ value: undefined, done: true }
