let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';
if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else {
    playerMove = 'nożyce';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'nieznany ruch';
if (randomNumber == 1) {
    computerMove = 'papier';
} else if (randomNumber == 2) {
    computerMove = 'kamień';
} else {
    computerMove = 'nożyce'
}
printMessage('Ty dałeś: ' + playerMove + '<br> Komputer dał: ' + computerMove)

printMessage('Twój ruch to: ' + playerMove);
if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Wygrywa komputer!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Wygrywa komputer!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Wygrywa komputer!');
} else {
    printMessage('REMIS!');
}