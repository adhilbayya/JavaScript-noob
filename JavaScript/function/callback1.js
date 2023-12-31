function isEven(num){
  return num % 2 == 0;
}
function isOdd(num){
  return num % 2 != 0;
}

function evaluate(num, func){
  let res = [];
  for(const number of num){
    if(func(number)){
      res.push(number);
    }
  }
  return res;
}

let numbers = [1,2,3,4,5,6,7,8,9]
let evenResult = evaluate(numbers, isEven);
let oddResult = evaluate(numbers, isOdd);
console.log(evenResult); //[ 2, 4, 6, 8 ]
console.log(oddResult); //[ 1, 3, 5, 7, 9 ]
