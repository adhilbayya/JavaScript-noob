function add(...arg){
  let total = 0;
  for(const a of arg){
    total += a;
  }
  return total;
}
console.log(add(1,2,3));
  
