"use strict";
let answer = Math.trunc(Math.random() * 20) + 1;
console.log(answer);
let score = 20;
let highscore = 0;

/* DOM ELEMENTS */
const number = document.querySelector(".number");
const scoreLabel = document.querySelector(".score");
const msg = document.querySelector(".message");
const highscoreLabel = document.querySelector(".highscore");
const input = document.querySelector(".guess");

document.querySelector(".check").addEventListener("click", function () {
  //
  if (!input.value) {
    msg.textContent = "🚫 No number!";

    // WIN
  } else if (input.value == answer && score > 1) {
    number.textContent = input.value;
    msg.textContent = "🎉 Correct number!";
    highscore = score;
    highscoreLabel.textContent = highscore;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // TOO HIGH
  } else if (input.value > answer && score > 1) {
    // number.textContent = input;
    msg.textContent = "📈 Too high";
    score--;
    scoreLabel.textContent = score;

    // TOO LOW
  } else if (input.value < answer && score > 1) {
    // number.textContent = input;
    msg.textContent = "📉 Too low";
    score--;
    scoreLabel.textContent = score;

    // LOST
  } else {
    msg.textContent = "☠️ YOU LOST THIS ROUND...";
    scoreLabel.textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  scoreLabel.textContent = score;
  number.textContent = "?";
  msg.textContent = "Start guessing...";
  input.value = "";
  answer = Math.trunc(Math.random() * 20) + 1;
  console.log(answer);
});
