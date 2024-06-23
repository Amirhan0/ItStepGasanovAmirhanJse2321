const quizForm = document.getElementById("quiz-form");
const quizInputs = document.querySelectorAll(".form-check-input");
quizInputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    console.log(e);
  });
});
