
const choices = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    playRound(this.textContent);
  });
});

let playerChoice = ["paper","Scissor","rock"]

function playRound(playerChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    alert("Tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerWins++;
    alert("You win this round!");
  } else {
    computerWins++;
    alert("The computer wins this round!");
  }

  if (playerWins === 5 || computerWins === 5) {
    if (playerWins === 5) {
      alert("You win the game!");
    } else {
      alert("The computer wins the game!");
    }
    buttons.forEach(button => button.disabled = true);
  }
}