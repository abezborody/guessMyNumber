"use strict";
let answer = Math.trunc(Math.random() * 20) + 1;
console.log(answer);
let score = 20;
let highscore = 0;

/* DOM ELEMENTS */
const highscoreLabel = document.querySelector(".highscore");
const input = document.querySelector(".guess");

/* Functions */
const setRandomAnswer = function () {
  return (answer = Math.trunc(Math.random() * 20) + 1);
};
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const setNumberLabel = function (number) {
  document.querySelector(".number").textContent = number;
};
const setScoreLabel = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  if (!input.value) {
    displayMessage("🚫 No number!");
    // WIN
  } else if (input.value == answer && score > 1) {
    setNumberLabel(input.value);
    displayMessage("🎉 Correct number!");
    // Highscore assign
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // Wrong guess
  } else if (input.value !== answer) {
    displayMessage(input.value > answer ? "📈 Too high" : "📉 Too low");
    score--;
    setScoreLabel(score);
  } else {
    displayMessage("☠️ YOU LOST THIS ROUND...");
    setScoreLabel(0);
  }
});

// Reset
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  setScoreLabel(score);
  setNumberLabel("?");
  displayMessage("Start guessing...");
  input.value = "";
  setRandomAnswer();
  console.log(answer);
});
