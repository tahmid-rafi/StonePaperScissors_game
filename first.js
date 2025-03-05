let userScore = 0; // user score
let compScore = 0; // computer score

const choices = document.querySelectorAll('.choice'); // Select all choices
const msg = document.querySelector('#msg'); // Fixing msg selection issue

const userScorePara = document.querySelector('#user-score'); // Access user score
const compScorePara = document.querySelector('#comp-score'); // Access computer score

// Add color to scores
userScorePara.style.color = "#211C84";
compScorePara.style.color = "#AC1754";

// Function to generate computer choice
const genCompChoice = () => {
     const options = ['rock', 'paper', 'scissors']; // options for the computer to choose from
     const randIdx = Math.floor(Math.random() * 3); // random number generator
     return options[randIdx]; // return the computer's choice
};

// Function for draw game
const drawGame = () => {
     msg.innerText = "Game was Draw. Try Again!";
     msg.style.backgroundColor = "#081b31"; // Reset to default background
};

// Function to show the winner
const showWinner = (userWin, userChoice, compChoice) => {
if (userWin) {
          userScore++; // Increase user score
          userScorePara.innerText = userScore; // Update user score UI
          msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green";
     } else {
          compScore++; // Increase computer score
          compScorePara.innerText = compScore; // Update computer score UI
          msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
          msg.style.backgroundColor = "red";
          }
};

// Function to play the game
const playGame = (userChoice) => {
     const compChoice = genCompChoice(); // Generate computer choice

if (userChoice === compChoice) {
          drawGame(); // If both choices are the same
} else {
     let userWin = false; // Default lose condition

     // Game rules
     if ((userChoice === "rock" && compChoice === "scissors") ||
          (userChoice === "paper" && compChoice === "rock") ||
          (userChoice === "scissors" && compChoice === "paper")) {
          userWin = true;
     }

          showWinner(userWin, userChoice, compChoice);
     }
};

// Add event listener to each choice
choices.forEach(choice => {
     choice.addEventListener('click', () => {
          const userChoice = choice.getAttribute("id"); // Get user choice
          playGame(userChoice); // Start the game
     });
});
