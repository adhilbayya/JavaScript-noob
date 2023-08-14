let computer = ['scissor','paper','stone'];
let player = 'stone';
let comp = computer[Math.floor(Math.random()*computer.length)];
let result;
console.log(comp)

if(player == comp){
    result = console.log("The game is tie")
    
}
else if(player == "stone"){
    if(comp == "paper"){
        result = console.log("Computer win")
        
    }
    else{
        result = console.log("Player win")
        
    }
}

else if(player == "paper"){
    if(comp == "scissor"){
        result = console.log("Computer win")
        
    }
    else{
        result = console.log("PLayer win")
        
    }
}

else{
    if(comp == "stone"){
        result = console.log("Computer win")
    }
    else{
        result = console.log("player win")
    }
}
