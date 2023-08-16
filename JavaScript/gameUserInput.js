let start = confirm("Play stone, paper, scissor?")
if(start){
    let option = prompt("Stone, Paper, or Scissor");
    if(option){
        let player = option.trim().toLowerCase();
        if(player == "stone" ||
        player == "paper" || 
        player == "scissor"){
            let computerChoice = Math.floor(Math.random()*3 +1);
            let computer = computerChoice == 1? "stone":computerChoice == 2? "paper" : "scissor";
            
            let result = 
            player == computer?`player = ${player} and Computer = ${computer} \n=> Tie Game` :
            player == "stone" && computer == "paper"? `player = ${player} and Computer = ${computer} \n=> Computer wins` :
            player == "paper" && computer == "scissor"? `player = ${player} and Computer = ${computer} \n=> Computer wins`:
            player == "scissor" && computer == "stone"? `player = ${player} and Computer = ${computer} \n=> Computer wins`:
            `player = ${player} and Computer = ${computer} \n=> Player wins`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Thank You for Playing :)") // this location.reload() is a function to reload the page.
            }else{
            alert("Enter valid options!!!")
            }
        }else{
            alert("Maybe next time then!")
        }
    }
else{
    alert("Maybe next time :)")
}
