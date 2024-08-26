'use strict';
// Random number 1-20
let numRandom = Math.trunc(Math.random() * 20) + 1;
let userGuess;
let userScore = 20;

// function (refactoring)
// Create a function to display a message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

displayScore(userScore);

// Clicking the check button
document.querySelector('.check').addEventListener('click', function () {
  userGuess = Number(document.querySelector('.guess').value);

  // When the input is not valid
  if (!userGuess) {
    displayMessage('Not a valid number!');
  }
  // When the guess is right
  else if (userGuess === numRandom) {
    document.querySelector('.number').textContent = numRandom;

    displayMessage('You won!');
    document.querySelector('.check').disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
  // When the guess is wrong
  else if (userGuess !== numRandom) {
    // When there's still score left
    if (userScore > 1) {
      userScore--;

      displayMessage(userGuess > numRandom ? 'Too high!' : 'Too low!');

      displayScore(userScore);
    }
    // When no more attempts are left
    else {
      displayMessage('Game over!');

      displayScore(0);
      document.querySelector('.check').disabled = true;
    }
  }
});

// Clicking the again button
document.querySelector('.again').addEventListener('click', function () {
  userScore = 20;
  numRandom = Math.trunc(Math.random() * 20) + 1;
  displayScore(userScore);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').disabled = false;
});
