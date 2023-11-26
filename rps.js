function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}
//console.log(getComputerChoice());
function playRound(computerSelection) {
    let playerSelect = prompt ();
    playerSelect = playerSelect.toLowerCase();
    if (playerSelect == 'rock' && computerSelection == 'Rock'){
        return statuse='It\'s a Tie!';
    }
    else if (playerSelect == 'rock' && computerSelection == 'Paper') {
        return statuse='You lose! Paper beats Rock';
    }
    else if (playerSelect == 'rock' && computerSelection == 'Scissors') {
        return statuse='You win! Rock beats Scissors';
    }
    else if (playerSelect == 'paper' && computerSelection == 'Paper'){
        return statuse='It\'s a Tie!';
    }
    else if (playerSelect == 'paper' && computerSelection == 'Rock') {
        return statuse='You win! Paper beats Rock';
    }
    else if (playerSelect == 'paper' && computerSelection == 'Scissors') {
        return statuse='You lose! Scissors beats Paper';
    }
    else if (playerSelect == 'scissors' && computerSelection == 'Scissors'){
        return statuse='It\'s a Tie!';
    }
    else if (playerSelect == 'scissors' && computerSelection == 'Paper') {
        return statuse='You win! Scissors beats Paper';
    }
    else if (playerSelect == 'scissors' && computerSelection == 'Rock') {
        return statuse='You lose! Rock beats Scissors';
    }
}

function game (){
    let yourScore = 0;
    let computerScore = 0;
    while (yourScore < 3 && computerScore < 3 ) {
        const computerSelection = getComputerChoice ();
        let game = playRound(computerSelection);
        if (game.slice(0,7) === 'You win') {
            yourScore++;
            console.log (game);
        }
        else if (game.slice (0,2) === 'It'){
            console.log (game);
        }
        else {
            computerScore++;
            console.log (game);
        }
    }
    let winner
    if (yourScore > computerScore) {
        winner = 'You won';
    }
    else {
        winner = 'Computer won';
    }
    return winner;
}
console.log (game());