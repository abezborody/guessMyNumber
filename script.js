"use strict";

let score = 20;
let highscore = 0;

/* DOM ELEMENTS */
const number = document.querySelector(".number");
const scoreLabel = document.querySelector(".score");
const msg = document.querySelector(".message");
const highscoreLabel = document.querySelector(".highscore");

const answer = Math.trunc(Math.random() * 20) + 1;
console.log(answer);

document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);
  if (!input) {
    msg.textContent = "🚫 No number!";
  } else if (input === answer && score > 1) {
    number.textContent = input;
    msg.textContent = "🎉 Correct number!";
    highscore = score;
    highscoreLabel.textContent = highscore;
  } else if (input > answer && score > 1) {
    number.textContent = input;
    msg.textContent = "📈 Too high";
    score--;
    scoreLabel.textContent = score;
  } else if (input < answer && score > 1) {
    number.textContent = input;
    msg.textContent = "📉 Too low";
    score--;
    scoreLabel.textContent = score;
  } else {
    msg.textContent = "☠️ YOU LOST THIS ROUND...";
    scoreLabel.textContent = 0;
  }
});
