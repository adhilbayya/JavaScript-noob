const mainGame = () =>{
    const startGame = confirm("Shall we play the game?");
    startGame ? playGame() : alert("Okay bye!");
}

const playGame = () =>{
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice == ""){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result  = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if(askToPlayAgain()){
            continue;
        }else{
            thanksforPlaying();
            break;
        }
    }
};

const getPlayerChoice = () =>{
    return prompt("Stone, Paper or Scissor");
}

const formatPlayerChoice = (playerChoice) =>{
    if(playerChoice || playerChoice == ""){
        return playerChoice.trim().toLowerCase();
    }else{
        return false;
    }
}

const decidedNotToPlay = () =>{
    return alert("Okay we will miss you");
}

const evaluatePlayerChoice = (playerChoice) =>{
    if(playerChoice == "stone" ||
    playerChoice == "paper" ||
    playerChoice == "scissor"){
        return playerChoice;
    }else{
        return false;
    }
};

const invalidChoice = () =>{
    return alert("Please enter stone paper or scissor");
}

const getComputerChoice = () =>{
    let choice = ["stone","paper","scissor"];
    const randomNumber = Math.floor(Math.random()*choice.length)
    return choice = choice[randomNumber]; 
}

const determineWinner = (player, computer) =>{
    const winner = player == computer?
    "Its a Tie!":
    player == "stone" && computer == "paper"?
    `P1 = ${player}  C1 = ${computer} \n Computer wins!!!`:
    player == "paper" && computer == "scissor"?
    `P1 = ${player}  C1 = ${computer} \n Computer wins!!!`:
    player == "scissor" && computer == "stone"?
    `P1 = ${player}  C1 = ${computer} \n Computer wins!!!`:
    `P1 = ${player}  C1 = ${computer} \n Player wins!!!`;

    return winner;
}

const displayResult = (result) =>{
    return alert(result);
}

const askToPlayAgain = () =>{
    return confirm("Do you wanna play again?");
}

const thanksforPlaying = () =>{
    return alert("Thanks for playing :)");
}

mainGame();
