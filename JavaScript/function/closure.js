function greeting(message){
  return function(name){
    return message + ' ' + name;
  }
}
let sayHi = new greeting('Hi');
let sayHello = new greeting('Hello');
sayHi('Adhil');
sayHello('bayya');
