let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let gameWinner = "";
const playerScoreP = document.getElementById('player-score');
const computerScoreP = document.getElementById('computer-score');
const roundWinnerP = document.getElementById('round-Winner');
const gameWinnerP = document.getElementById('game-winner')

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
      console.log(roundWinner)
      roundWinnerP.textContent = `Tied Round`
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      roundWinner = 'Player'
      roundWinnerP.textContent = `Round winner: ${roundWinner}`
      playerScoreP.textContent = `Player score: ${playerScore}`
      console.log('playerScore: ' + playerScore)
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      roundWinner = 'Computer'
      roundWinnerP.textContent = `Round winner: ${roundWinner}`
      computerScoreP.textContent = `Computer score: ${computerScore}`
      console.log('computerScore: ' + computerScore)
    }
  }

function computerPlay() { //Computer generates a random answer
    let random = ["ROCK", "PAPER", "SCISSORS"];
    return random[Math.floor(Math.random() * 3)];

}

function isGameOver() { //Sets a limit of 5 wins to finish the round
  return playerScore === 5 || computerScore === 5
}

function openEndgameModal(){ //Resets the score to play again
  playerScore = 0;
  computerScore = 0;
  playerScoreP.textContent = `Player score: 0`
  computerScoreP.textContent = `Computer score: 0`
}

function setFinalMessage(){
  gameWinnerP.textContent = roundWinner + " is the GAME WINNER"
  console.log(roundWinner + " is the GAME WINNER!") 
} 


const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');


rockBtn.addEventListener('click', () => userClick('ROCK'))
paperBtn.addEventListener('click', () => userClick('PAPER'))
scissorsBtn.addEventListener('click',() => userClick('SCISSORS'))

function userClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = computerPlay()
  playRound(playerSelection, computerSelection)

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
}