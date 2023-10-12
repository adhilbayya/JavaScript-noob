class Person{
  constructor(name){
    this.setName(name);
  }
  getName(){
    return this.name;
  }
  setName(newName){
    newName = newName.trim();
    if(newName === ''){
      throw 'Name is empty';
    }
    this.name = newName;
  }
}

let person = new Person('Bayya');
console.log(person);

person.setName('Adhil');
console.log(person.getName());
