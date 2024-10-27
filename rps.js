let stats = {
    wins: 0,
    losses: 0,
    ties: 0
};

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }
    
    return 'lose';
}

function updateStats() {
    document.getElementById('wins').textContent = stats.wins;
    document.getElementById('losses').textContent = stats.losses;
    document.getElementById('ties').textContent = stats.ties;
}

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    let resultText = `You chose ${playerChoice}, computer chose ${computerChoice}. `;
    
    switch(result) {
        case 'win':
            resultText += 'You win!';
            stats.wins++;
            break;
        case 'lose':
            resultText += 'Computer wins!';
            stats.losses++;
            break;
        case 'tie':
            resultText += "It's a tie!";
            stats.ties++;
            break;
    }
    
    document.getElementById('result').textContent = resultText;
    updateStats();
}