let computer = ["stone","paper","scissor"];
let player = "stone";
let comp = computer[Math.floor(Math.random() * computer.length)];

let result = comp == player ? "The game is tie":
  comp == "stone" && player == "paper" ? "Player wins" : 
  comp == "paper" && player == "scissor"? "Player wins" :
  comp == "scissor" && player == "stone"? "Player wins" : "Computer wins";

console.log(comp);
console.log(result);
