function setUserName() {
  const userName = document.getElementById("username");
  const name = localStorage.getItem("login");
  if (userName && name) {
    userName.textContent = name;
  }
}

document.addEventListener("DOMContentLoaded", setUserName);
async function getEvents() {
  const url = "https://aaca53d3bfb3d1d9.mokky.dev/events";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function renderEvents() {
  document.querySelector(".events-container").innerHTML = "";
  const events = await getEvents();
  let html = "";

  events.forEach((event) => {
    if (event.status === "active") {
      html += `
    <div class="event-card">
    <img src="${event.img}" alt="">
    <h2>${event.title}</h2>
    <p>${event.description}</p>
    <p>${event.site}</p>
    <p>Дата: <span class="event-date">${event.data}</span></p>
    <button class="register-btn" onclick='addEvent("${event.id}")'>Записаться</button>
  </div>
    `;
    }
  });
  document.querySelector(".events-container").innerHTML = html;
}
document.addEventListener("DOMContentLoaded", renderEvents);

const exit = document.querySelector(".exit");

exit.addEventListener("click", () => {
  localStorage.clear();
});

async function addEvent(eventid) {
  try {
    const name = localStorage.getItem("login");
    const response = await fetch("https://aaca53d3bfb3d1d9.mokky.dev/guys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: name,
        eventId: eventid,
        status: "active",
      }),
    });
    if (response.ok) {
      console.log("OKEY");
      alert("Вы успешно зарегистрировались!");
    }
  } catch (error) {
    alert("Ошибка в регистрации");
    console.log("ERROR");
  }
}
