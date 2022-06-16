function userPlay() {
    let userPick = ["rock", "paper", "scissors"];
    alert("Mayusculas activadas, por favor escribe en minúsculas")
    return userPick = prompt('Pick rock, paper or scissors');

}

function computerPlay() { //computer generates a random answer.
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];

}


function playRound(playerSelection, computerSelection) { //plays a round of the game.
if (playerSelection == "rock") {
    if (computerSelection == "rock") {
        return "Draw!";
    } else if (computerSelection == "paper") {
        return "Computer wins!";
    } else {
        return "User wins!";
    }
} else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
        return "User wins!";
    } else if (computerSelection == "paper") {
        return "Draw!";
    } else {
        return "Computer wins!";
    }
} else {
    if (computerSelection == "rock") {
        return "Computer wins!";
    } else if (computerSelection == "paper") {
        return "User wins!";
    } else {
        return "Draw!";
    }
}
}


let userChoice = userPlay();
let computerSelection = computerPlay();
let result = playRound(userChoice, computerSelection)
console.log("user's choice", userChoice);
console.log("computer's choice", computerSelection);
console.log("Result is", result);
document.getElementById("user-choice").textContent = "Your choice: " + userChoice;
document.getElementById("computer-choice").textContent = "computer's choice: " + computerSelection;
document.getElementById("result").textContent = "Result is: " + result;