class Animal{
  constructor(legs){
    this.legs = legs;
  }
  walking(legs){
    console.log(`Walking in ${this.legs} legs`);
  }
}

class Bird extends Animal{
  constructor(legs){
    super(legs);
  }

fly(){
  console.log("Bird is flying");
}
}
let bird = new Bird(2);
bird.walking();
bird.fly();
