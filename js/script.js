paperRockScissors();

function paperRockScissors() {
    let computerWins = 0;
    let playerWins = 0;

    const playGame = (playerInput) => {
        clearMessages();
        /*     let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
            console.log('Gracz wpisał: ' + playerInput); */
        const getMoveName = (argMoveId) => {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            } else {
                return 'Nie znam ruchu o id ' + playerInput + '.';
            }
        }
        const playerMove = getMoveName(playerInput);

        /* if (playerInput == '1') {
            playerMove = 'kamień';
        } else if (playerInput == '2') {
            playerMove = 'papier';
        } else {
            playerMove = 'nożyce';
        } */
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);


        /* if (randomNumber == 1) {
            computerMove = 'papier';
        } else if (randomNumber == 2) {
            computerMove = 'kamień';
        } else {
            computerMove = 'nożyce'
        } */
        const displayResults = (argComputerMove, argPlayerMove) => {
            printMessage('<br> Ty dałeś: ' + argPlayerMove + '<br> Komputer dał: ' + argComputerMove);
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('<br>TY WYGRYWASZ!');
                return playerWins++;
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('<br>TY WYGRYWASZ!');
                return playerWins++;
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('<br>TY WYGRYWASZ!');
                return playerWins++;
            } else if (argComputerMove == argPlayerMove) {
                printMessage('<br>REMIS!');
            } else {
                printMessage('<br>WYGRYWA KOMPUTER! ');
                return computerWins++;
            }
        };
        displayResults(computerMove, playerMove);
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
        printMessage('<br>Twoje wygrane: ' + playerWins + '<br> Wygrane komputera: ' + computerWins);
    }
    document.getElementById('play-rock').addEventListener('click', function () {
        playGame('1');
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame('2');
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame('3');
    });
}