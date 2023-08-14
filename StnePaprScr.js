let computer = ['scissor','paper','stone'];
let player = 'stone';
let comp = computer[Math.floor(Math.random()*computer.length)];
let result;
console.log(comp)

switch(player){
case comp:
    result = console.log("The game is tie")
    break;
    
case "stone":
    if(comp == "paper"){
        result = console.log("Computer win")   
    }
    else{
        result = console.log("Player win")     
    }
    break;

case "paper":
    if(comp == "scissor"){
        result = console.log("Computer win")       
    }
    else{
        result = console.log("Player win")        
    }
    break;

default:
    if(comp == "stone"){
        result = console.log("Computer win")
    }
    else{
        result = console.log("player win")
    }
    break;
}
