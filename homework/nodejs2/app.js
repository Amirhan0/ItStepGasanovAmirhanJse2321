const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  res.setHeader("Content-type", "text/html");

  const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

  let basePath = "";

  switch (req.url) {
    case "/":
      basePath = createPath("index");
      res.statusCode = 200;
      break;
    case "/contacts":
      basePath = createPath("contacts");
      res.statusCode = 200;
      break;
    default:
      basePath = createPath("error");
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end("Ошибка на сервере");
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", (error) => {
  if (error) {
    console.log("Ошибка при запуске сервера:", error);
  } else {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  }
});
