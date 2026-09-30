const score = document.querySelector("#score");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const results = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        results.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    if (humanScore === 5) {
    results.textContent = "You won the game!";
} else if (computerScore === 5) {
    results.textContent = "Computer won the game!";
}
if (humanScore === 5 || computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}
}


rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});