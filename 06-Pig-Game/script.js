'use strict';

// Selecting elements
// total score
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// current scores
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// dice
const diceEL = document.querySelector('.dice');
// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
const startGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEL.classList.add('hidden');
  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
};
/*
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
*/
startGame();

// New game button functionality
btnNew.addEventListener('click', function () {
  console.log('Starting game');
  startGame();
});

// Hold button functionality
btnHold.addEventListener('click', function () {
  console.log('Holding');
  score[activePlayer] += currentScore;
  if (score[activePlayer] > 99) {
    // Wins!
  } else {
    if (activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0));
  }
});

// Roll dice button functionality
btnRoll.addEventListener('click', function () {
  // Generate a dice roll, display dice, set the correct img
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // Check for rolled 1
  if (dice !== 1) {
    // Add to current score and display to active player
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Reset current score and switch player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    if (activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0));
  }
});
