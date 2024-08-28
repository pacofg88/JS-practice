'use strict';

// Select DOM element by selector (ID, Classes as parameter)
const score0El = document.querySelector('#score--0');
// Select DOM element by ID (the name of the ID as parameter)
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Selecting elements
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Automatically converted to string
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

let currentScore = 0;

btnNew.addEventListener('click', function () {
  console.log('Starting game');
});
btnRoll.addEventListener('click', function () {
  // Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEL.classList.remove('hidden');
  // Update the src attribute of the dice element
  diceEL.src = `dice-${dice}.png`;

  // Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
btnHold.addEventListener('click', function () {
  console.log('Holding');
});
