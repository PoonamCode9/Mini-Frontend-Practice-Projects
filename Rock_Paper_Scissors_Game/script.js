const btns = document.querySelectorAll("button");
const res = document.querySelector("#result");
const playerScr = document.querySelector("#user-score");
const computerScr = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } 
    else if((playerSelection === "rock" && computerSelection === "scissor") || 
            (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissor" && computerSelection === "paper")
        ) {
        playerScore++;
        playerScr.textContent = playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else {
        computerScore++;
        computerScr.textContent = computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let result = playRound(btn.id, computerPlay());
        res.textContent = result;
    });
});