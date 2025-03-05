let userScore = 0; // user score
let compScore = 0; // computer score 

const choices = document.querySelectorAll('.choice'); // eslint-disable-line no-undef
const msg = document.querySelector('.msg'); // eslint-disable-line no-undef

const userScorePara = document.querySelector('#user-score'); // access the user score
const compScorePara = document.querySelector('#comp-score'); // access the computer score



const genCompChoice = () => {
     const options = ['rock', 'paper', 'scissors']; // options for the computer to choose from
     const randIdx = Math.floor(Math.random() * 3); // random number generator
     return options[randIdx]; // return the computer's choice
};


const drawGame = () => {
     msg.innerText = "Game was Draw.Try Again";
};


const showWinner = (userWin, userChoice, compChoice) => {
     if (userWin) {
          userScore++; // increment user score
          userScorePara.innerText = userScore; // display user score
          msg.innerText = `You Win! your choice was ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green";
     }else{
          compScore++; // increment computer score     
          compScorePara.innerText = compScore; // display computer score
          msg.innerText = `You Lose. ${compChoice}  was beats ${userChoice}`;
          msg.style.backgroundColor = "red";
     }
};


const playGame = (userChoice) => {
     //Generate computer choice
     const compChoice = genCompChoice(); // generate computer choice

     if (userChoice === compChoice) { // user and computer choice are the same or different
          drawGame(); // draw game
     } else {
          let userWin = true; // user win or lose
          if (userChoice === 'rock') { // write condition
               //scissors, paper
               userWin = compChoice === 'paper' ? false : true;  // user win or not
          } else if (userChoice === 'paper') {
               //rock, scissors
               userWin = compChoice === 'scissors' ? true : false; // user win or not
          } else {
               //rock, paper
               userWin = compChoice === "rock" ? false : true;
          }
          showWinner(userWin, userChoice, compChoice); // show the winner
     }
};

choices.forEach(choice => {
     choice.addEventListener('click', () => {
          const userChoice = choice.getAttribute("id"); // get the user choice
          playGame(userChoice);    // play computer game
     })
});