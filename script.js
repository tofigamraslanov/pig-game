'use strict';

// Selecting Elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2.Display dice
  score0EL.textContent = dice;
  // 1.Check for rolled 1: if true, switch to next player
  if (dice == 1) {
  }
});
