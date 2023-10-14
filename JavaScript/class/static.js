2class Item{
  constructor(name, quantity){
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++; //Item.count++;
  }
  static count = 0;
  static getCount(){
    return Item.count;
  }
}

let pen = new Item('pen',2);
let book = new Item('book',4);
console.log(Item.getCount());
