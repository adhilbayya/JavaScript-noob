const myObj = {
    name : "Adhil",
    age : "20",
    hobbies : ["Coding","Football"],
    drinkCoffee : () =>{
        return console.log(`${myObj.name} is drinking coffee :)`)
    }
}
console.log(myObj)
console.log(myObj.drinkCoffee());

const sendJSON = JSON.stringify(myObj);
console.log(typeof sendJSON);
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON)
console.log(typeof receiveJSON);
