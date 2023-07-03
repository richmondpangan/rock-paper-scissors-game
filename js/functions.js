const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let playerScoreDisplay = document.querySelector('#player-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let playerSelectedDisplay = document.querySelector('#player-selected');
let computerSelectedDisplay = document.querySelector('#computer-selected');
let roundWinnerDisplay = document.querySelector('#round-winner');
let winnerDisplay = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;


function getPlayerSelected() {
    rockBtn.addEventListener('click', () => {
        const playerSelection = "Rock";
        let computerSelection = getComputerChoice();

        playerScoreDisplay.textContent = `Player One score: ${getPlayerScore(playerSelection, computerSelection)}`;
        computerScoreDisplay.textContent = `Computer score: ${getcomputerScore(playerSelection, computerSelection)}`;
        playerSelectedDisplay.textContent = `Player One selected: ${playerSelection}`;
        computerSelectedDisplay.textContent = `Computer selected: ${computerSelection}`;
        roundWinnerDisplay.textContent = playRound(playerSelection, computerSelection);
        winnerDisplay.textContent = getWinner(playerScore, computerScore);
    });
    
    paperBtn.addEventListener('click', () => {
        const playerSelection = "Paper";
        let computerSelection = getComputerChoice();

        playerScoreDisplay.textContent = `Player One score: ${getPlayerScore(playerSelection, computerSelection)}`;
        computerScoreDisplay.textContent = `Computer score: ${getcomputerScore(playerSelection, computerSelection)}`;
        playerSelectedDisplay.textContent = `Player One selected: ${playerSelection}`;
        computerSelectedDisplay.textContent = `Computer selected: ${computerSelection}`;
        roundWinnerDisplay.textContent = playRound(playerSelection, computerSelection);
        winnerDisplay.textContent = getWinner(playerScore, computerScore);
    });
    
    scissorsBtn.addEventListener('click', () => {
        const playerSelection = "Scissors";
        let computerSelection = getComputerChoice();

        playerScoreDisplay.textContent = `Player One score: ${getPlayerScore(playerSelection, computerSelection)}`;
        computerScoreDisplay.textContent = `Computer score: ${getcomputerScore(playerSelection, computerSelection)}`;
        playerSelectedDisplay.textContent = `Player One selected: ${playerSelection}`;
        computerSelectedDisplay.textContent = `Computer selected: ${computerSelection}`;
        roundWinnerDisplay.textContent = playRound(playerSelection, computerSelection);
        winnerDisplay.textContent = getWinner(playerScore, computerScore);
    });
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Player1 wins!, Rock beats Scissors";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Player1 wins!, Paper beats Rock";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Player1 wins!, Scissors beat Paper";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Computer wins!, Paper beats Rock";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Computer wins!, Scissors beats Paper";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Computer wins!, Rock beat Scissors";
    }
    else {
        return "It's a tie!";
    }
}

function getPlayerScore(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return playerScore = playerScore + 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return playerScore = playerScore + 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return playerScore = playerScore + 1;
    }
    else {
        return playerScore = playerScore;
    }
}

function getcomputerScore(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return computerScore = computerScore + 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return computerScore = computerScore + 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return computerScore = computerScore + 1;
    }
    else {
        return computerScore = computerScore;
    }
}

function getWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        if (playerScore > computerScore) {
            return "Congratulations Player One!";
        }
    }
    else if (computerScore === 5) {
        if (playerScore < computerScore) {
            return "You lose, try again?"
        }
    }
    else return "";
}

getPlayerSelected();



// Old code for console
/*
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

game();*/