class Circle{
  #radius = 0; //Private class is denoted by #;
  constructor(radius){
    this.radius = radius;
  }
  get area(){
    return Math.PI * Math.pow(this.#radius, 2);
  }
  set radius(value){
    if(typeof value === 'number' && value > 0){
      this.#radius = value;
    }else{
      throw 'this is not a positive value ';
    }
  }
  get radius(){
    return this.#radius;
  }
}

let circle = new Circle(10);
console.log(circle.area);
