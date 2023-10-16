const car = {
  name : 'Car',
  start(){
    console.log(`${this.name} is starting`);
  },
  speedup(){
    console.log(`${this.name} is speeding up`);
  }
}
const airplane = {
  name : 'Airplane',
  fly(){
    console.log('Flying....');
  }
}
car.start.call(airplane);  //Airplane is starting.
car.speedup.call(airplane); //Airplane is speeding up.
