const bestFootballPlayers1 = ["Messi","Maradona","Ronaldo","Pele"];
const bestFootballPlayers2 = ["Neymar","Mbappe","Cruyif","Xavi"];


const bestCricketPlayers1 = ["Virat","Sachin","Lara","Dhoni"];
const bestCricketPlayers2 = ["Sangakara","Bumrah","Warne","Anderson"];


// Single dimentional array.
let GOAT = bestFootballPlayers1[0]; 
console.log(GOAT);


// Two dimentional array.
const footballPlayers = [bestFootballPlayers1,bestFootballPlayers2];
const cricketPlayers = [bestCricketPlayers1,bestCricketPlayers2]

let bestFootballPlayer = footballPlayers[0][0];
console.log(bestFootballPlayer)

let bestCricketPlayer = cricketPlayers[0][1];
console.log(bestCricketPlayer);


// Three dimentional array.
const players = [footballPlayers,cricketPlayers];
let bestOfAllTime = players[0][0][0];
let favBowler = players[1][1][1];
console.log(bestOfAllTime);
console.log(favBowler);
