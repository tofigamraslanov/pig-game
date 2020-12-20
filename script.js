'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0 ');
const player1El = document.querySelector('.player--1 ');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePLayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePLayer}`).textContent = 0;
  currentScore = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2.Display dice

  diceEl.classList.remove('hidden');
  diceEl.src = `./img/dice-${dice}.png`;
  // 3.Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePLayer}`
    ).textContent = currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // 1.Add current score to active player's score
  scores[activePLayer] += currentScore;
  document.getElementById(`score--${activePLayer}`).textContent =
    scores[activePLayer];
  // 2.Check if player's score is >= 100
  // Finish the game

  // Switch to the next player
  switchPlayer();
});
