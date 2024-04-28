// const url = "https://7f431141e872dc8a.mokky.dev/test";

// async function data() {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// async function render() {
//   console.log("Тестовый вывод");
//   document.querySelector(".container").innerHTML = "";

//   const tests = await data();
//   let html = "";
//   console.log(tests);
//   tests.forEach((item, index) => {
//     if (item.active === true) {
//       html += `
//         <div class='test'>
//           <h3>${item.title}</h3>
//       `;
//       item.variant.forEach((variant, variantIndex) => {
//         html += `
//           <button class='btn' data-test-index='${index}' data-variant-index='${variantIndex}'>${variant}</button>
//         `;
//       });
//       html += "</div>";
//       console.log(html);
//     }
//   });

//   document.querySelector(".container").innerHTML += html;

//   document.querySelectorAll(".btn").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       const testIndex = event.target.getAttribute("data-test-index");
//       const variantIndex = event.target.getAttribute("data-variant-index");
//       console.log(
//         "Нажата кнопка с индексом теста",
//         testIndex,
//         "и индексом варианта ответа",
//         variantIndex
//       );
//     });
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   render();
// });
const savedTests = JSON.parse(localStorage.getItem("testData"));

if (savedTests) {
  let correctAnswersCount = 0;

  const html = savedTests
    .map((test) => {
      let optionsHTML = test.options
        .map(
          (option, index) => `
            <button class="answer-button" data-question-index="${index}" ${
            test.correctAnswers.includes(index) ? 'data-correct="true"' : ""
          }>${option}</button>`
        )
        .join("");

      return `
        <div class='test'>
          <h3>${test.question}</h3>
          ${optionsHTML}
        </div>
      `;
    })
    .join("");

  document.querySelector(".container").innerHTML = html;

  const answerButtons = document.querySelectorAll(".answer-button");
  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const questionIndex = button.getAttribute("data-question-index");
      const isCorrect = button.getAttribute("data-correct") === "true";

      button.disabled = true;

      if (isCorrect) {
        correctAnswersCount++;
      }

      const totalQuestions = savedTests.length;
      const answeredQuestions = document.querySelectorAll(
        ".answer-button.answered"
      ).length;
      if (answeredQuestions === totalQuestions) {
        const resultHTML = `
          <div class="result">
            <p>Правильных ответов: ${correctAnswersCount} из ${totalQuestions}</p>
          </div>
        `;
        document.querySelector(".result-container").innerHTML = resultHTML;
      }
    });
  });
} else {
  document.querySelector(".container").innerHTML =
    "<p>Локальное хранилище пусто</p>";
}
document.querySelectorAll(".answer-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("answered");
  });
});
