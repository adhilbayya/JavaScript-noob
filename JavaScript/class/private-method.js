class Person{
  #firstname;
  #lastname;
  constructor(firstname, lastname){
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  #firstlast(){
    return `${this.#firstname} ${this.#lastname}`;
  }
  #lastfirst(){  //# --> using this we get the private method;
    return `${this.#lastname} ${this.#firstname}`;
  }
  getfullName(validate = true){
    return validate ? this.#firstlast() : this.#lastfirst();
  }
}
let person = new Person('Adhil', 'mohammed');
console.log(person.getfullName());
    
