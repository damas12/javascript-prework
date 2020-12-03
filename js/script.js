clearMessages();
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyczki';
    } else {
        return 'Nie znam ruchu o id ' + playerInput + '.';
    }
}
let playerMove = getMoveName(playerInput);

/* if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else {
    playerMove = 'nożyce';
} */

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);


/* if (randomNumber == 1) {
    computerMove = 'papier';
} else if (randomNumber == 2) {
    computerMove = 'kamień';
} else {
    computerMove = 'nożyce'
} */

function displayResults(argComputerMove, argPlayerMove) {
    printMessage('Ty dałeś: ' + argPlayerMove + '<br> Komputer dał: ' + argComputerMove);
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        return 'Ty wygrywasz!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        return 'Ty wygrywasz!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        return 'Ty wygrywasz!';
    } else if (argComputerMove == argPlayerMove) {
        return 'REMIS!';
    } else {
        return 'Wygrywa komputer!'
    }
}
printMessage(displayResults(computerMove, playerMove));
/* if (computerMove == 'kamień' && playerMove == 'papier') {
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
} */