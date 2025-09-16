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

function getHumanChoice(event) {
    let target = event.target;
    switch(target.id) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    const results = document.querySelector(".results");
    const text = document.createElement("p");
    const runningScore = document.createElement("p");
    if (humanChoice == "rock") {
        text.textContent = "You chose Rock. ";
        if (computerChoice == "paper") {
            text.textContent += "You lose! Paper beats Rock.";
            computerScore[0]++;
        } else if (computerChoice == "scissors") {
            text.textContent += "You win! Rock beats Scissors.";
            humanScore[0]++;
        } else {
            text.textContent += "It's a tie! You both played Rock.";
        }
    } else if (humanChoice == "paper") {
        text.textContent = "You chose Paper. ";
        if (computerChoice == "rock") {
            text.textContent += "You win! Paper beats Rock.";
            humanScore[0]++;
        } else if (computerChoice == "scissors") {
            text.textContent += "You lose! Scissors beat Paper.";
            computerScore[0]++;
        } else {
            text.textContent += "It's a tie! You both played Paper.";
        }
    } else if (humanChoice == "scissors") {
        text.textContent = "You chose Scissors. ";
        if (computerChoice == "rock") {
            text.textContent += "You lose! Rock beats Scissors.";
            computerScore[0]++;
        } else if (computerChoice == "paper") {
            text.textContent += "You win! Scissors beat Paper.";
            humanScore[0]++;
        } else {
            text.textContent += "It's a tie! You both played Scissors.";
        }
    }
    runningScore.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

    results.appendChild(text);
    results.appendChild(runningScore);
}

function playGame(event, humanScore, computerScore) {
    let playerSelection = getHumanChoice(event);
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection, humanScore, computerScore);
    
    if (humanScore[0] === 5 || computerScore[0] === 5) {
        const results = document.querySelector(".results");
        const finalResult = document.createElement("p");
        if (humanScore[0] === 5) {
            finalResult.textContent = "Congratulations! You beat the computer!";
        } else {
            finalResult.textContent = "Game Over. Better luck next time!";
        }
        results.appendChild(finalResult);
    }
}

let humanScore = [0];
let computerScore = [0];

const options = document.querySelector(".options");
options.addEventListener("click", (event) => {
    if (humanScore[0] !== 5 && computerScore[0] !== 5) {
        playGame(event, humanScore, computerScore);
    }
});