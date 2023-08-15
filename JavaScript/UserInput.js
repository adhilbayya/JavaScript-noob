// To give an alert box in the page
alert("There is an Error!");

// To give a box that ask the user OK & cancel
confirm("Are you sure!");

// To get input from user
prompt("Whats Your name?");

// Small project to learn user input
let name = prompt("Whats your name? (Min 5 char)")
if(name){
    if(name.length >= 5){
        console.log(`Welcome ${name.trim()}`) //The trim function is to delete the unnessesary white spaces at the end of the String.
    }
    else{
        console.log("Enter atleast 5 charecters!")
    }
}else{
    console.log("Enter your name!")
}
