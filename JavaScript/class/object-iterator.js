class Sequence{
  constructor(start = 2, end = Infinity, interval = 1){
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  [Symbol.iterator](){
    let nextIterator = this.start;
    let counter = 0;
    return {
      next : () => {
        if(nextIterator <= this.end){
          let result = {value : nextIterator, done : false}
          nextIterator += this.interval;
          counter++;
          return result;
        }
        return {value : counter, done : true}
      }
    }
  }
}
let evennumbers = new Sequence(2,10,2);
for(const num of evennumbers){
  console.log(num);
}
