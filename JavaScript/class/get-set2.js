class Person{
  constructor(name){
    this.name = name;
  }
  get name(){
    return this.name;
  }
  set name(newName){
    newName = newName.trim();
    if(newName == ''){
      throw 'Name is empty';
    }
    this.name = newName;
  }
}

let person = new Person('Adhil');
person.name = 'Bayya';
console.log(person.name) // Bayya
