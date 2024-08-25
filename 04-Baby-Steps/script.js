'use strict';
/*
// Selecting and displaying on console the element with the message class
console.log(document.querySelector('.message'));
// Selecting the element with the message class and editing its text content
document.querySelector('.message').textContent = 'AAAH';

document.querySelector('.number').textContent = 13;

document.querySelector('.userName').textContent = 'Francisco Javier';

// Set the value in the input box
document.querySelector('.userNum').value = 100;
*/

// Random number 1-20
let numRandom = Math.trunc(Math.random() * 20) + 1;
let userGuess;
let userScore = 20;

document.querySelector('.number').textContent = numRandom;
document.querySelector('.score').textContent = userScore;

// Clicking the check button
document.querySelector('.check').addEventListener('click', function () {
  userGuess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'Playing...';

  if (!userGuess) {
    document.querySelector('.message').textContent = 'Not a valid number!';
  } else if (userGuess === numRandom) {
    document.querySelector('.message').textContent = 'You won!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (userGuess > numRandom) {
    if (userScore > 1) {
      document.querySelector('.message').textContent = 'A lower number!';
      userScore--;
      document.querySelector('.score').textContent = userScore;
    } else {
      document.querySelector('.message').textContent = 'Game over!';
    }
  } else if (userGuess < numRandom) {
    if (userScore > 1) {
      document.querySelector('.message').textContent = 'A higher number!';
      userScore--;
      document.querySelector('.score').textContent = userScore;
    } else {
      document.querySelector('.message').textContent = 'Game over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Clicking the again button
document.querySelector('.again').addEventListener('click', function () {
  userScore = 20;
  numRandom = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = numRandom;
  document.querySelector('.score').textContent = userScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
