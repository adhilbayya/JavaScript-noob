class Sequence{
  constructor(start = 1, end = Infinity, interval = 1){
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  *[Symbol.iterator](){
    for(let index = this.start; index <= this.end; index += this.interval){
      yield index;
    }
  }
}

let evennumber = new Sequence(2,10,2);
for(let num of evennumber){
  console.log(num)
}
