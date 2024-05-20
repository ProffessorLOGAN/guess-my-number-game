'use strict';

// document.querySelector('.answer').textContent = 'Tansen Keshri';
// document.querySelector('.input-text').value = 15;

let guessNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;
document.querySelector('.input-button').addEventListener('click', (e) => {
    e.preventDefault();

    const inputValue = Number(document.querySelector('.input-text').value);

    // Wrong Input
    if (!inputValue || 0 > inputValue) {
        document.querySelector('.answer').textContent = 'invalid input !!';

        // Coorect Guess
    } else if (inputValue === guessNumber) {
        document.querySelector('.answer').textContent = 'Correct Number !!';
        document.querySelector('.gNumber').textContent = guessNumber;
        document.querySelector('.main-text').textContent = 'You Win !!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.main-text').style.color = 'blue';
        document.querySelector('.answer').style.color = 'black';

        //HighScore

        if (scoreNumber > highScore) {
            highScore = scoreNumber;
            document.querySelector('.highScore').textContent = highScore;
        }


        //Guess is Too High
    } else if (inputValue > guessNumber) {
        if (scoreNumber > 1) {
            document.querySelector('.answer').textContent = 'Very High Number !!';
            document.querySelector('.answer').style.color = 'red';
            scoreNumber--;
            document.querySelector('.scoreNumber').textContent = scoreNumber;
        } else {
            document.querySelector('.answer').textContent = 'You Lose the Game !!';
            document.querySelector('.scoreNumber').textContent = 0;
        }


        //Guess is Too Low
    } else if (inputValue < guessNumber) {
        if (scoreNumber > 1) {
            document.querySelector('.answer').textContent = 'Very Low Number !!';
            document.querySelector('.answer').style.color = 'pink';
            scoreNumber--;
            document.querySelector('.scoreNumber').textContent = scoreNumber;
        } else {
            document.querySelector('.answer').textContent = 'You Lose the Game !!';
            document.querySelector('.scoreNumber').textContent = 0;
        }

    }


})

document.querySelector('.again').addEventListener('click', (e) => {
    e.preventDefault();
    scoreNumber = 20;
    guessNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.gNumber').textContent = '?';
    document.querySelector('.answer').textContent = 'Start guessing ...';
    document.querySelector('.answer').style.color = 'black';
    document.querySelector('.input-text').value = '';
    document.querySelector('.scoreNumber').textContent = 20;
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.main-text').style.color = 'black';
})