// In our UI, the player should be able to play the game by clicking 
// on buttons rather than typing their answer in a prompt.

// Global variables
let drawMessage = "It's a draw!";
let winMessage = "You win!!";
let loseMessage = "You lose.";
const messages = [drawMessage, winMessage, loseMessage];

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const computerOptions = ["rock", "paper", "scissors"];

// DOM refs
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const gameOverDiv = document.getElementById("gameOver");

// Listeners on buttons
// Switch on each id - its humanChoice
document.getElementById('options').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){

        // check for x click
        const choice = e.target.id;
        if(choice === "end"){
            alert(`Game ended!
                Final Score: 
                You: ${humanScore}
                Computer: ${computerScore}
                Draws: ${drawScore}`);
            
            return;
        }

        // Stop if someone reaches 5
        if (winCheck()) return;

        playRound(e.target.id);
        showScore();
        winCheck();
    }
});

function getRandomInt(maxNum){
    return Math.floor(Math.random() * maxNum);
}

function getComputerChoice(){
    let randInt = getRandomInt(3);
    let computerChoice = computerOptions[randInt];
    resultsDiv.textContent = `Computer chose: ${ computerChoice}`;
    return computerChoice;
}

function playRound(humanChoice){

    let compChoice = getComputerChoice();
    // game logic
    switch (humanChoice)
    {
        case "rock":
            if (compChoice === "rock"){
                resultsDiv.textContent = drawMessage;
                drawScore++;
            } else if (compChoice === "scissors"){
                resultsDiv.textContent = winMessage;
                humanScore++;
            } else {
                resultsDiv.textContent = loseMessage;
                computerScore++;
            }
            break;

        case "paper":
            if (compChoice === "paper"){
                resultsDiv.textContent = drawMessage;
                drawScore++;
            } else if (compChoice === "rock"){
                resultsDiv.textContent = winMessage;
                humanScore++;
            } else {
                resultsDiv.textContent = loseMessage;
                computerScore++;
            }
            break;

        case "scissors":
            if (compChoice === "scissors"){
                resultsDiv.textContent = drawMessage;
                drawScore++;
            } else if (compChoice === "paper"){
                resultsDiv.textContent = winMessage;
                humanScore++;
            } else {
                resultsDiv.textContent = loseMessage;
                computerScore++;
            }
            break;
        default:
            console.log("Invalid choice");
    }
}

function showScore(){
    // Show score
    let scoreContent = `Your Score: ${humanScore}
    Computer: ${computerScore}
    Draws ${drawScore}`;
    scoreDiv.textContent = scoreContent;
    
}

function winCheck(){
    let gameOverMessage = "";
    if(humanScore == 5){
        gameOverDiv.textContent = "You win the game!";
        alert("You win the game!");
        return true;
    }

    if(computerScore == 5){
        gameOverDiv.textContent = "Computer wins the game!";
        alert("Computer wins the game!");
        return true;
    }

    return false;
}