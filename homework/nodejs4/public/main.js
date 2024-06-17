const socket = io();

const clientsTotal = document.getElementById("client-total");
const messageContainer = document.getElementById("message-container");
const nameInput = document.getElementById("name-input");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const sendSound = document.getElementById("send-sound");
const typingIndicator = document.getElementById("feedback");
let typing = false;
let timeout;

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
  playSendSound();
});

messageInput.addEventListener("keydown", () => {
  if (!typing) {
    typing = true;
    socket.emit("typing", { user: nameInput.value });
  }

  clearTimeout(timeout);
  timeout = setTimeout(stopTyping, 3000);
});

messageInput.addEventListener("keyup", () => {
  clearTimeout(timeout);
  timeout = setTimeout(stopTyping, 3000);
});

socket.on("client-total", (data) => {
  clientsTotal.innerText = `Total clients: ${data}`;
});

socket.on("typing", (data) => {
  typingIndicator.innerText = `${data.user} is typing a message...`;
});

socket.on("stop typing", () => {
  typingIndicator.innerText = "";
});

socket.on("chat-message", (data) => {
  console.log(data);
  addMessageToUI(false, data);
});

function sendMessage() {
  const name = nameInput.value;
  const message = messageInput.value;
  if (name == "" || message == "") {
    return;
  }
  const data = {
    name: name,
    message: message,
    dateTime: new Date().toLocaleString(),
  };
  socket.emit("message", data);
  addMessageToUI(true, data);
  messageInput.value = "";
  stopTyping();
}

function addMessageToUI(isOwnMessage, data) {
  const element = `
        <li class="${isOwnMessage ? "message-right" : "message-left"}">
            <p class="message">
                ${data.message}
                <span>${data.name} ● ${data.dateTime}</span>
            </p>
        </li>
    `;
  messageContainer.innerHTML += element;
}

function playSendSound() {
  sendSound.play();
}

function stopTyping() {
  typing = false;
  socket.emit("stop typing", { user: nameInput.value });
}
