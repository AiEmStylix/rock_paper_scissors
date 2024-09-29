let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

//DOM Elements
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const playerSign = document.querySelector("#playerSign");
const computerSign = document.querySelector("#computerSign");
const scoreMessage = document.querySelector("#scoreMessage");
const winMessage = document.querySelector(".score-info");

const SIGNS = {
    'Rock': '✊',
    'Paper': '✋',
    'Scissors': '✌️'
};

