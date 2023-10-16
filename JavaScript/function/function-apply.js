let dog = {value : 'dog', sound : 'bow'}
let cat = {value : 'cat', sound : 'meow'}

const say = function(message){
  console.log(message);
  console.log(this.value + " says "+ this.sound);
}

say.apply(cat,["What does the cat sound like"]);
say.apply(dog,['What does the dog sound like?']);
