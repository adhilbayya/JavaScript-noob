const myDetails = {}

Object.defineProperties(myDetails,{
  name:{
    value:'Adhil'
  },
  age:{
    value:20
  },
  plusThree:{
    get:function(){
      return this.age + 3;
    }
  })

console.log("Hello "+myDetails.name+" you will be "+myDetails.plusThree+" years old in the next 3 years");
