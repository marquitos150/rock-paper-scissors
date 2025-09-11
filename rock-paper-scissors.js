function getComputerChoice() {
    // 1 = Rock, 2 = Paper, 3 = Scissors
    let choice = parseInt(3 * Math.random()) + 1;
    if (choice == 1) {
        return "rock";
    } if (choice == 2) {
        return "paper";
    } if (choice == 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Type \"Rock\", \"Paper\", or \"Scissors\"? (omit quotation marks)");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors.");
                humanScore++;
            } else {
                console.log("It's a tie! You both played Rock.");
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beat Paper.");
                computerScore++;
            } else {
                console.log("It's a tie! You both played Paper.");
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beat Paper.");
                humanScore++;
            } else {
                console.log("It's a tie! You both played Scissors.");
            }
        }
    }
    
    for (let i = 0; i <= 4; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice.toLowerCase(), computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You beat the computer!");
    } else if (humanScore < computerScore) {
        console.log("Game Over. Better luck next time!");
    } else {
        console.log("Neither of you won. Neither of you lost. Good games all around.");
    }
}

playGame();