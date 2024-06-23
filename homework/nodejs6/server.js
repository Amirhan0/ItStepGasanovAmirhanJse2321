const express = require("express");
const path = require("path");
const app = express();
//body-parser - это middleware для обработки данных POST-запросов в Node.js
const bodyParser = require("body-parser");
//PORT сервера
const PORT = 7000;
app.use(express.static(path.join(__dirname, "client")));
//Используется в приложениях Express.js для того, чтобы middleware body-parser мог распознавать и парсить данные, отправленные клиентом с заголовком Content-Type: application/json.
app.use(bodyParser.json());
app.use(express.json());
//Обьект - массив локальный
let USERS = [{ id: 1, nameUser: "Amir", positionUser: "hello", marked: false }];

app.listen(PORT, () => {
  console.log("Сервер запущен на порту 7000");
});
//Гет запрос мы его выводим
app.get("/api/contacts", (req, res) => {
  res.status(200).json(USERS);
});
//Пост запрос, мы его отправляем
app.post("/api/position", (req, res) => {
  const position = req.body;
  USERS.push(position);
  res.status(201).json(USERS);
});

//Удаление при клике

app.delete('/api/position', (req,res) => {
  const id = req.params.id
  
  const index = USERS.findIndex(position => position.id === id)

  if (index !== -1) {
    USERS.splice(index, 1)
    res.status(200).json(USERS)
  } else {
    res.status(400).send('error')
  }
})