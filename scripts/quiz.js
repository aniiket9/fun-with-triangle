const quizform = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "no",
  "45°",
];

function calculateScore() {
    let score = 0,
    index = 0;
    const formResults = new FormData(quizform);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log("The score is "+score);
  outputEl.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);