const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Сервер запущен на 4000`);
});

const io = require("socket.io")(server);
app.use(express.static(path.join(__dirname, "public")));

let socketsConnected = new Set();
io.on("connection", onConnected);

function onConnected(socket) {
  console.log(socket.id);
  socketsConnected.add(socket.id);

  io.emit("client-total", socketsConnected.size);

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
    socketsConnected.delete(socket.id);
    io.emit("client-total", socketsConnected.size);
  });

  socket.on("typing", (data) => {
    console.log(`начал печатать ${data.name}`)
    socket.broadcast.emit("typing", data);
  });

  socket.on("stop typing", (data) => {
    console.log(`перестает печатать ${data.name}`)
    socket.broadcast.emit("stop typing", data);
  });

  socket.on("message", (data) => {
    console.log(data);
    socket.broadcast.emit("chat-message", data);
  });
}
