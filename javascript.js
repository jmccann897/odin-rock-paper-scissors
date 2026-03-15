// ***Console game for rock paper scissors***

/*  **Requirements**
Ask user if they want to play rock paper scissors
Loop the game logic unless user inputs an exit command?
Take input from user - string of rock/paper/scissors
Create a random turn representing the computer
Compare the two values to determine winner
Return results to player
Ask if they wish to continue
*/ 

/* **Code plan**

Input - string - if at any time, use x to end game

Game - input rock, paper, scissors (ignore case)

Use random to pick value 0-2 to determine computer selection of rock paper scissors

winning, draw and lose logic
Rock > scissors
Paper > rock
Scissors > paper

Return result to user
Ask if they wish to continue

Bonus - track results and update on results
*/


// Global variables
let drawMessage = "It's a draw!";
let winMessage = "You win!!";
let loseMessage = "You lose.";
const messages = [drawMessage, winMessage, loseMessage];

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const computerOptions = ["rock", "paper", "scissors"];

let numberOfRounds = 5;

// main
playGame(numberOfRounds);

// Helper functions
function playGame(rounds){
    let playARound = true;
    let roundCount = 0

    while(playARound && roundCount < rounds){

        let humanChoice = getHumanChoice();
        console.log("You chose:", humanChoice);

        if(humanChoice.toLowerCase() === "x"){
            console.log("Thanks for playing!");
            break;
        }

        let compChoice = getComputerChoice();

        if (!computerOptions.includes(humanChoice)) {
            console.log("Invalid choice. Please enter rock, paper, scissors, or x to exit.");
            continue;
        }

        playRound(humanChoice, compChoice);
        roundCount++;
        showScore(scores);
    }
}

function getRandomInt(maxNum){
    return Math.floor(Math.random() * maxNum);
}

function getComputerChoice(){
    let randInt = getRandomInt(3);
    let computerChoice = computerOptions[randInt];

    //console.log("random int:", randInt);
    console.log("Computer chose:", computerChoice);

    return computerChoice;
}

function getHumanChoice(){
    return prompt("Enter rock, paper, scissors (or x to exit)").trim().toLowerCase();
}


function playRound(humanChoice, compChoice ){
    // game logic
    switch (humanChoice)
    {
        case "rock":
            if (compChoice === "rock"){
                console.log(drawMessage);
                drawScore++;
            } else if (compChoice === "scissors"){
                console.log(winMessage);
                humanScore++;
            } else {
                console.log(loseMessage);
                computerScore++;
            }
            break;

        case "paper":
            if (compChoice === "paper"){
                console.log(drawMessage);
                drawScore++;
            } else if (compChoice === "rock"){
                console.log(winMessage);
                humanScore++;
            } else {
                console.log(loseMessage);
                computerScore++;
            }
            break;

        case "scissors":
            if (compChoice === "scissors"){
                console.log(drawMessage);
                drawScore++;
            } else if (compChoice === "paper"){
                console.log(winMessage);
                humanScore++;
            } else {
                console.log(loseMessage);
                computerScore++;
            }
            break;
        default:
            console.log("Invalid choice");
    }
}

function showScore(){
    // Show score
    console.log("Score:");
    console.log("Your Score:", humanScore);
    console.log("Computer:", computerScore);
    console.log("Draws:", drawScore);
}