let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

//Button
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const restartButton = document.querySelector('#restartBtn');
//UI
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const playerSign = document.querySelector("#playerSign");
const computerSign = document.querySelector("#computerSign");
const scoreMessage = document.querySelector("#scoreMessage");
const winMessage = document.querySelector(".score-info h2");

paperBtn.addEventListener('click', () => handleClick('Paper'));
rockBtn.addEventListener('click', () => handleClick('Rock'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));
restartButton.addEventListener('click', () => resetGame());

const SIGNS = {
    'Rock': '✊',
    'Paper': '✋',
    'Scissors': '✌️'
};

const gameRules = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Paper'
};

let getRandomChoice = () => {
    let result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

let handleClick = (playerChoice) => {
    if (isGameOver()) {
        displayModal();
        return;
    }
    const computerChoice = playRound(playerChoice);
    updateScore(playerChoice, computerChoice);
    console.log('Winner: ' + roundWinner);
    console.log('Score: ' + playerScore + ':' + computerScore);

    if (isGameOver()) {
        displayModal();
        return;
    }
}

let playRound = (playerChoice) => {
    const computerChoice = getRandomChoice();
    if (gameRules[playerChoice] === computerChoice) {
        playerScore++;
        roundWinner = 'player';
    } else if (gameRules[computerChoice] === playerChoice) {
        computerScore++;
        roundWinner = 'computer';
    } else
        roundWinner = 'ties';
    return computerChoice;
}

let updateScore = (playerChoice, computerChoice) => {
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    playerSign.textContent = `${SIGNS[playerChoice]}`;
    computerSign.textContent = `${SIGNS[computerChoice]}`;
    if (roundWinner === 'ties') {
        scoreMessage.textContent = "It's a tie!";
    } else if (roundWinner === 'player') {
        scoreMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        scoreMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

let isGameOver = () => (playerScore === 5 || computerScore === 5);
let resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = 'Player: 0';
    computerScoreText.textContent = 'Computer: 0';
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    scoreMessage.textContent = 'First to score 5 points wins the game';
    winMessage.textContent = 'Choose your sign';
    restartButton.setAttribute('disabled', null);
}

let displayModal = () => {
    restartButton.removeAttribute('disabled');
}