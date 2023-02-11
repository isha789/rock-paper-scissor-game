const options = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
for (let i = 0; i < 5; i++) {
  let playerSelection = prompt("Enter rock, paper, or scissors (or press Cancel to exit):");
  if (playerSelection === null) {
    console.log("You have exited the game.");
    break;
  }
  playerSelection = playerSelection.toLowerCase();
  while (!options.includes(playerSelection)) {
    playerSelection = prompt("Invalid input. Please enter rock, paper, or scissors (or press Cancel to exit):");
    if (playerSelection === null) {
      console.log("You have exited the game.");
      break;
    }
    playerSelection = playerSelection.toLowerCase();
  }
  if (playerSelection === null) {
    break;
  }
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  console.log(`Round ${i + 1}:`);
  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log("You win this round!");
    playerWins++;
  } else {
    console.log("You lose this round.");
    computerWins++;
  }
  console.log(`Score: Player - ${playerWins} | Computer - ${computerWins}`);
  console.log("\n");
}
if (playerWins > computerWins) {
  console.log("You win the game!");
} else if (playerWins < computerWins) {
  console.log("You lose the game.");
} 





