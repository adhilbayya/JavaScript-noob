class Animal{
  constructor(legs){
    this.leg = leg;
  }
}

class Bird extends Animal{
  constructor(legs, color){
    super(legs);
    this.color = color; //this._color = color;
  }
  getColor(){           //get color()
    return this.color;  //return this._color;
  }
}

let bird = new Bird(2 , 'Blue');
console.log(bird.getColor()); //console.log(bird.color);
