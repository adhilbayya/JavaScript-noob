class Person{
  constructor(name){
    this.name = name;
  }
  get name(){
    return this._name;
  }
  set name(newName){
    newName = newName.trim();
    if(newName == ''){
      throw 'Name is empty';
    }
    this._name = newName;
  }
}

let person = new Person('Adhil');
person.name = 'Bayya';
console.log(person.name) // Bayya


//What will happen if we only use the getter not the setter

class Person{
  constructor(name){
    this._name = name;
  }
  get name(){
    return this._name;
  }
}

let person = new Person("Adhil");
person.name = "Bayya";
console.log(person.name) //Adhil
  
