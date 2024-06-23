const express = require("express");
const PORT = 5000;
const app = express();
//Получаем из папки models схему
const Question = require("./models/question");
//Ссылка на мою папку хелперс, где в итоге находится пас который помогает двигаться по папке.
const createPath = require("./helpers/create-path");
//Установка монгуся для помощи монгодб
const mongoose = require("mongoose");
//Ссылка на мой монгодб профиль
const db =
  "mongodb+srv://Amir:narhanim123@cluster0.u7lmi2z.mongodb.net/quiz?retryWrites=true&w=majority&appName=Cluster0";
//Отправлять запросы
app.use(express.urlencoded({ extended: true }));
//Включаю сервер
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Сервер запущен на порту 5000`);
});
//Подключаем к монгодб
mongoose
  .connect(db)
  .then((res) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(express.json()); // Для обработки JSON в теле запроса

//Использование в html файле <%
app.set("view engine", "ejs");
//Главная страница
app.get("/", (req, res) => {
  Question.find()
    .then((questions) => {
      res.render("index", { questions });
    })
    .catch((error) => {
      console.log(error);
      res.render("error", { title: "Error" });
    });
});

//Пост запрос
app.post("/submit-quiz", (req, res) => {
  const userAnswers = req.body;
  console.log("Received user answers:", userAnswers);

  if (!userAnswers || Object.keys(userAnswers).length === 0) {
    return res.status(400).send("No answers submitted");
  }

  // Поиск всех вопросов в базе данных
  Question.find()
    .then((questions) => {
      let score = 0;

      // Проход по каждому вопросу и проверка ответа пользователя
      questions.forEach((question, index) => {
        const correctAnswer = question.answers[parseInt(question.correctIndex)];
        const userAnswer = userAnswers[`question${index + 1}`];
        // Увеличение счёта, если ответ верный
        if (userAnswer === correctAnswer) {
          score++;
        }
      });

      // Формирование HTML для отображения результата
      const resultHTML = `
        <div class="container quiz-container">
          <div class="card">
            <div class="card-header">
              <h2>Quiz Title</h2>
              <p>Your score: ${score}/${questions.length}</p>
            </div>
          </div>
        </div>
      `;

      // Отправка результата обратно пользователю
      res.send(resultHTML);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error fetching questions");
    });
});
