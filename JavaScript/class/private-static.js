class Person{
  #firstname;
  #lastname;
  constructor(firstname, lastname){
    this.#firstname = Person.#validate(firstname);
    this.#lastname = Person.#validate(lastname);
  }
  static #validate(name){
    if(typeof name === 'string'){
      let str = name.trim();
      if(str.length > 3){
        return str;
      }
    }
    throw 'The name is not a string or doesnt has 4 letters';
  }
  #firstlast(){
    return `${this.#firstname} ${this.#lastname}`;
  }
  #lastfirst(){
    return `${this.#lastname} ${this.#firstname}`;
  }
  getname(fullname = true){
    return fullname ? this.#firstlast() : this.#lastfirst();
  }
}

let person = new Person('Adhil', 'Bayya');
console.log(person.getname());
