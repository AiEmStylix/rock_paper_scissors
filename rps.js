let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// Get computer's choice
let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// Get player's choice
let getHumanChoice = () => {
    let choice = prompt("Input your choice here (Rock/Paper/Scissors): ");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

let playRound = (playerSelection, computerSelection) => {
    // Ties
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    // Player wins
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        roundWinner = 'player';
    }
    // Computer wins
    else {
        computerScore++;
        roundWinner = 'computer';
    }
    updateScoreboard();
    checkWinner();
}

function playGame() {
    if (playerScore < 5 && computerScore < 5) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

function updateScoreboard() {
    document.querySelector('#playerScore').textContent = `Player Score: ${playerScore}`;
    document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore}`;
    document.querySelector('#result').textContent = `Round winner: ${roundWinner}`;
}

function checkWinner() {
    if (playerScore === 5) {
        document.querySelector('#winner').textContent = 'Congratulations! You are the overall winner!';
        disableButton();
    } else if (computerScore === 5) {
        document.querySelector('#winner').textContent = 'Computer wins! Better luck next time!';
        disableButton();
    }
}

function disableButton() {
    document.querySelector('button').disabled = true;
}

// Add event listener to the button
document.querySelector('button').addEventListener('click', playGame);
