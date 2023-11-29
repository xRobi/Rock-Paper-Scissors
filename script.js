function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(computerSelection, playerSelection) {
  let cs = computerSelection.toLowerCase();
  let ps = playerSelection.toLowerCase();
  if (cs === ps) {
    roundWinner = "tie";
  }
  if (
    (cs === "rock" && ps === "scissors") ||
    (cs === "paper" && ps === "rock") ||
    (cs === "scissors" && ps === "paper")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  if (
    (ps === "rock" && cs === "scissors") ||
    (ps === "paper" && cs === "rock") ||
    (ps === "scissors" && cs === "paper")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
  updateScore(roundWinner);
  gameStatus(computerScore, playerScore);
  gameOver(playerScore, computerScore);
  signs(playerSelection, computerSelection);
}

function updateScore(roundWinner) {
  if (roundWinner === "tie") {
    resultround.textContent = "It's a tie!";
  } else if (roundWinner === "player") {
    resultround.textContent = "You won!";
  } else if (roundWinner === "computer") {
    resultround.textContent = "You lost!";
  }
}

function updateScoreMessage(roundWinner, playerSelection, computerSelection) {
  if (roundWinner === "player") {
    result.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()} `;
  } else if (roundWinner === "computer") {
    result.textContent = `${capitalizeFirstLetter(
      computerSelection
    )} beats ${playerSelection.toLowerCase()}`;
  } else if (roundWinner === "tie") {
    result.textContent = `${capitalizeFirstLetter(
      computerSelection
    )} ties with ${playerSelection.toLowerCase()}`;
  }
}

function gameStatus(computerScore, playerScore) {
  yourScore.textContent = "Player:" + playerScore;
  pcScore.textContent = "Computer:" + computerScore;
}

function gameOver(playerScore, computerScore) {
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    yourScore.textContent = "Player:" + playerScore;
    pcScore.textContent = "Computer:" + computerScore;
    resultround.textContent = "Choose your weapon";
    result.textContent = "First to 5 points wins the game";
    playagain.style.display = "block";
  }
}

function signs(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerSign.textContent = "✊";
      break;
    case "paper":
      playerSign.textContent = "✋";
      break;
    case "scissors":
      playerSign.textContent = "✌";
      break;
  }

  switch (computerSelection) {
    case "rock":
      computerSign.textContent = "✊";
      break;
    case "paper":
      computerSign.textContent = "✋";
      break;
    case "scissors":
      computerSign.textContent = "✌";
      break;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function refreshPage() {
  window.location.reload();
}

const Rock = document.querySelector("#Rock");
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissors");
const yourScore = document.querySelector(".yourscore");
const pcScore = document.querySelector(".pcscore");
const result = document.querySelector(".result");
const resultround = document.querySelector(".resultround");
const playagain = document.querySelector(".Playagain");
const playerSign = document.querySelector(".playersign");
const computerSign = document.querySelector(".computersign");

playagain.addEventListener("click", () => {
  refreshPage();
});

playagain.style.display = "none";

Rock.addEventListener("click", () => {
  playRound(getComputerChoice(), "rock");
});

Paper.addEventListener("click", () => {
  playRound(getComputerChoice(), "paper");
});

Scissors.addEventListener("click", () => {
  playRound(getComputerChoice(), "scissors");
});
