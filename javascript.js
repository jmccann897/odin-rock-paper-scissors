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


// vars
let drawMessage = "It's a draw!";
let winMessage = "You win!!";
let loseMessage = "You lose.";

let userScore = 0;
let computerScore = 0;
let drawScore = 0;

let playing = true;

while(playing){

    let userChoice = prompt("Enter rock, paper, scissors (or x to exit)").trim().toLowerCase();

    if(userChoice === "x"){
        console.log("Thanks for playing!");
        break;
    }

    console.log("You chose:", userChoice);

    // computer choice
    const computerOptions = ["rock", "paper", "scissors"];
    let randInt = getRandomInt(3);
    let computerChoice = computerOptions[randInt];

    if (!computerOptions.includes(userChoice)) {
        console.log("Invalid choice. Please enter rock, paper, scissors, or x to exit.");
        continue;
    }

    //console.log("random int:", randInt);
    console.log("Computer chose:", computerChoice);

    // game logic
    switch (userChoice)
    {
        case "rock":
            if (computerChoice === "rock"){
                console.log(drawMessage);
                drawScore++;
            } else if (computerChoice === "scissors"){
                console.log(winMessage);
                userScore++;
            } else {
                console.log(loseMessage);
                computerScore++;
            }
            break;

        case "paper":
            if (computerChoice === "paper"){
                console.log(drawMessage);
                drawScore++;
            } else if (computerChoice === "rock"){
                console.log(winMessage);
                userScore++;
            } else {
                console.log(loseMessage);
                computerScore++;
            }
            break;

        case "scissors":
            if (computerChoice === "scissors"){
                console.log(drawMessage);
                drawScore++;
            } else if (computerChoice === "paper"){
                console.log(winMessage);
                userScore++;
            } else {
                console.log(loseMessage);
                computerScore++;
            }
            break;

        default:
            console.log("Invalid choice");
    }

    // Show score
    console.log("Score:");
    console.log("Your Score:", userScore);
    console.log("Computer:", computerScore);
    console.log("Draws:", drawScore);
}

function getRandomInt(maxNum){
    return Math.floor(Math.random() * maxNum);
}
