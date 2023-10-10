function argRequired(){
    throw new Error('The argument is required');
}
function sum(x = argRequired(), y = argRequired){
    return x + y;
}

console.log(sum(1)) // Error
console.log(sum(1,2)) // 3;
