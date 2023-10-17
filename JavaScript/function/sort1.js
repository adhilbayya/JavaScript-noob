const num = [1, 2, 7, 3, 9, 12, 6];
let ans = num.sort()
console.log(ans) //[1,12,2,3,4,6,7,9]
//sort function sort the array numbers using the unicode 

let num = [2,5,3,8,6,1];
let ans = num.sort(function(a, b){
  return a - b;
});
console.log(ans) //[ 1, 2, 3, 5, 6, 8 ]
