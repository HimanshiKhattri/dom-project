const btn = document.getElementById('subt');

let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessNumber = document.querySelector('#guessField');
const lowOrHi = document.querySelector('.lowOrHi');
const guesses = document.querySelector('.guesses');
const remainingResult = document.querySelector('.lastResult');
const startOver =  document.querySelector('.resultParas');

// console.log(randomNumber);
const p = document.createElement('p');

    let prevGuesses = [];
    let result = 1;
    let playGame = true;

    if(playGame) {
        btn.addEventListener('click' , function(e) {
            e.preventDefault();
            const guess = parseInt(guessNumber.value);
            validateGuess(guess);
        });
    }

function validateGuess(guess) {
    if( isNaN(guess) || guess < 1 || guess > 100 ) {
        alert("please enter a valid number between 1 and 100");
    } else {
        prevGuesses.push(guess);
        if(result >= 10){
            displayGuess(guess);
            displayMessage(`Game Over! the number was ${randomNumber}`);
            resetGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if( guess === randomNumber ) {
        displayMessage('congratulations! you guessed it right. The number was ' + randomNumber );
        resetGame();
        newGame();    
    } else if( guess < randomNumber ) {
        displayMessage('your guess is too low!');
    } else {
        displayMessage('your guess is too high!');
    }    
}

function displayGuess(guess) {
    result++;
    guessNumber.value = '';
    guesses.innerHTML += `${guess} `;
    remainingResult.innerHTML = `${11 - result}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function resetGame() {
    guessNumber.value = '';
    guessNumber.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    document.getElementById('newGame').addEventListener('click', function() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guessNumber.removeAttribute('disabled');
        startOver.removeChild(p);
        guesses.innerHTML = '';
        lowOrHi.innerHTML = '';
        result = 1;
        remainingResult.innerHTML = `${11 - result}`;
        prevGuesses = [];
        playGame = true;
    });
}






