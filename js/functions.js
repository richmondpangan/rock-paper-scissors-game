function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" || playerSelection === "Rock" || playerSelection === "ROCK") && (computerSelection === "Scissors")) {
        return "Player1 wins!, Rock beats Scissors";
    }
    else if ((playerSelection === "paper" || playerSelection === "Paper" || playerSelection === "PAPER") && (computerSelection === "Rock")) {
        return "Player1 wins!, Paper beats Rock";
    }
    else if ((playerSelection === "scissors" || playerSelection === "Scissors" || playerSelection === "SCISSORS") && (computerSelection === "Paper")) {
        return "Player1 wins!, Scissors beat Paper";
    }
    else if ((playerSelection === "rock" || playerSelection === "Rock" || playerSelection === "ROCK") && (computerSelection === "Paper")) {
        return "Computer wins!, Paper beats Rock";
    }
    else if ((playerSelection === "paper" || playerSelection === "Paper" || playerSelection === "PAPER") && (computerSelection === "Scissors")) {
        return "Computer wins!, Scissors beats Paper";
    }
    else if ((playerSelection === "scissors" || playerSelection === "Scissors" || playerSelection === "SCISSORS") && (computerSelection === "Rock")) {
        return "Computer wins!, Rock beat Scissors";
    }
    else {
        return "It's a tie!";
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Choose between rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}: Player1 Selected: ${playerSelection} vs Computer Selected: ${computerSelection}\nWinner: ${winner}`);
    }
}

game();