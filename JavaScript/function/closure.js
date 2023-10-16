function greeting(message){
  return function(name){
    return message + ' ' + name;
  }
}
let sayHi = new greeting('Hi');
let sayHello = new greeting('Hello');
console.log(sayHi('Adhil'));
console.log(sayHello('bayya'));
