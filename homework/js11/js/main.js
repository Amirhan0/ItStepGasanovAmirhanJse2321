const quiz = document.querySelector(".quiz");
const quizProgress = document.querySelector(".quiz__progress");
const quizTitle = document.querySelector(".quiz__title");
const quizContent = document.querySelector(".quiz__content");
const quizList = document.querySelector(".quiz__list");
const quizTotal = document.querySelector(".quiz__total");
const quizBtn = document.querySelector(".quiz__next-btn");
const resultBlock = document.querySelector(".result");
const resultText = document.querySelector(".result__text");
const quizBlock = document.querySelector(".quiz");
let currentQuestionIndex = 0;

let quizListItems = document.querySelectorAll(".quiz__option");

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  quizTitle.textContent = currentQuestion.question;
  quizList.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = option;
    listItem.classList.add("quiz__option");
    quizList.appendChild(listItem);
  });
  quizTotal.textContent = `${currentQuestionIndex + 1} из ${questions.length}`;
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  quizProgress.style.width = `${progressPercentage}%`;

  quizListItems.forEach((item) => {
    item.removeEventListener("click", handleAnswerClick);
  });

  quizListItems = document.querySelectorAll(".quiz__option");

  quizListItems.forEach((item) => {
    item.addEventListener("click", handleAnswerClick);
  });
}
function renderResults() {
  resultBlock.classList.remove("hidden");
  resultText.textContent = "";
  quizBlock.classList.add("hidden");
}

renderQuestion();
let correctAnswersCount = 0;

function handleAnswerClick(event) {
  const clickedOption = event.target;
  const options = Array.from(quizListItems);
  const clickedIndex = options.indexOf(clickedOption);

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswers = currentQuestion.answer;
  const selectedAnswer = currentQuestion.options[clickedIndex];
  const isCorrect = correctAnswers.includes(selectedAnswer);

  options.forEach((option, index) => {
    if (index === clickedIndex) {
      if (isCorrect) {
        option.classList.add("correct");
        correctAnswersCount++; 
      } else {
        option.classList.add("incorrect");
      }
    }
  });


  clickedOption.classList.add("selected");


  quizListItems.forEach((item) => {
    item.removeEventListener("click", handleAnswerClick);
  });
}

function renderResults() {
  resultBlock.classList.remove("hidden");
  resultText.textContent = `Правильных ответов: ${correctAnswersCount} из ${questions.length}`;
  quizBlock.classList.add("hidden");
}

quizBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    renderResults();
  }
});
