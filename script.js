function getComputerChoice () {
  let selectArr = ["rock", "paper", "scissors"];
  let randomSelect = Math.floor(Math.random() * 3);
  return (selectArr[randomSelect]);
}

// getComputerChoice();


function getPlayerChoice () {
  let choice = prompt('Enter any of these words: "rock", "paper" or "scissors": ');
  choice = choice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    // console.log(choice);
    console.error('Selection Wrong! Please enter any of the following words: "rock", "paper" or "scissors"');
  }
}

// getPlayerChoice();


let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection) {
  // console.log(computerSelection, playerSelection);
  
  if (playerSelection === computerSelection) {
    console.log("It's a draw play again!")
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection=== "paper" && computerSelection === "rock")) {
      console.log(`You won. Your (player) selection is ${playerSelection} and computer selection is ${computerSelection}`);
  } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection=== "paper" && playerSelection === "rock")) {
      console.log(`You lost! Your (player) selection is ${playerSelection} and computer selection is ${computerSelection}`);
  }
}

// playRound(playerSelection, computerSelection)


function play () {
  let arr = [];
  for (let i=1; i<=5; i++) {
    // playRound(playerSelection, computerSelection)
    console.log(arr.push(i))
  }
  playRound(playerSelection, computerSelection);
  console.log(arr)
  
}

play()