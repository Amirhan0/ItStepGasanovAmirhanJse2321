const createQuestion = document.getElementById("create_option");
let count = 1;

createQuestion.addEventListener("click", async (event) => {
  await createQuest().then(() => {
    const addBtn = document.querySelector(`#addOption${count}`);
    addBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const mainQuest = event.target.closest(".quest");
      const formAnswer = mainQuest.querySelector(".form_answers");
      const newOption = document.createElement("div");
      newOption.className = "options";
      newOption.innerHTML = `
                <input type="text" class="form-control mb-2 answer_question" name="option" placeholder="Введите вариант ответа">
                <input type="checkbox" class="correct_answer" name="correct" value="${
                  formAnswer.querySelectorAll(".options").length
                }"> Правильный ответ
            `;
      formAnswer.appendChild(newOption);
    });
  });
  count++;
});

async function createQuest() {
  let containerQuestion = document.querySelector("#testForm");
  containerQuestion.insertAdjacentHTML(
    "beforebegin",
    `
    <div class="quest">
        <div class="form-group form_question">
            <label for="question">Вопрос №${count}:</label>
            <input type="text" class="form-control name_question" id="question${count}" placeholder="Введите вопрос">
        </div>

        <div class="form-group form_answers" id="optionsContainer${count}">
            <label for="option1">Варианты ответов:</label>
            <div class="options">
                <input type="text" class="form-control mb-2 answer_question" name="option" placeholder="Введите вариант ответа">
                <input type="checkbox" class="correct_answer" name="correct" value="0"> Правильный ответ
            </div>
        </div>

        <button type="button" class="btn btn-primary mb-4 add_btn" id="addOption${count}">+Вариант ответа</button>
    </div>
    `
  );
}

document
  .getElementById("testForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    var data = {};
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    console.log(data);

    const questions = document.querySelectorAll(".quest");
    const savedData = [];
    questions.forEach((question) => {
      const questionText = question.querySelector(".name_question").value;
      const answers = question.querySelectorAll(".answer_question");
      const correctAnswers = question.querySelectorAll(
        ".correct_answer:checked"
      );

      const questionObj = {
        question: questionText,
        options: [],
        correctAnswers: [],
      };

      answers.forEach((answer, index) => {
        questionObj.options.push(answer.value);

        if (
          correctAnswers.length > 0 &&
          Array.from(correctAnswers).find(
            (item) => item.value === index.toString()
          )
        ) {
          questionObj.correctAnswers.push(index);
        }
      });

      savedData.push(questionObj);
    });

    localStorage.setItem("testData", JSON.stringify(savedData));
  });


  document.querySelector('.test-button').addEventListener('click', () => {
    window.location.href = 'take_test.html'
  })