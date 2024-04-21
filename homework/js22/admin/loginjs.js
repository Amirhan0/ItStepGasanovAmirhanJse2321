const userName = document.getElementById("username");
const name = localStorage.getItem("login");
userName.textContent = name;

const eventName = document.getElementById("eventName");
const eventDescription = document.getElementById("eventDescription");
const eventPrice = document.getElementById("eventPrice");
const eventImage = document.getElementById("eventImage");
const eventDate = document.getElementById("eventDate");
const eventStatus = document.getElementById("eventStatus");
const eventMaxSeats = document.getElementById("eventMaxSeats");

const btn = document.querySelector(".btn");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const eventForm = document.getElementById("eventForm");
eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addEvent(
    eventImage.value.trim(),
    eventName.value.trim(),
    eventDescription.value.trim(),
    eventDate.value.trim(),
    eventPrice.value.trim(),
    eventStatus.value.trim(),
    eventMaxSeats.value.trim()
  );
  renderEvents();
  async function addEvent(img, title, description, data, price, status, site) {
    await fetch("https://aaca53d3bfb3d1d9.mokky.dev/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        title,
        description,
        data,
        price,
        status,
        site,
      }),
    });
  }

  modal.style.display = "none";
});

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
    <button class="reg-btn" data-event-id="${event.id}">Редактировать</button>
    <button class="delete-btn" data-event-id="${event.id}">Удалить</button>
  </div>
    `;
    }
  });
  document.querySelector(".events-container").innerHTML = html;
}

const exit = document.querySelector(".exit");

exit.addEventListener("click", () => {
  localStorage.clear();
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const eventId = e.target.getAttribute("data-event-id");
    deleteEvent(eventId);
  }
});

async function deleteEvent(eventId) {
  try {
    const response = await fetch(
      `https://aaca53d3bfb3d1d9.mokky.dev/events/${eventId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Данные на сервер не отправляются!");
    }
    const data = await response.json();
    console.log(data);
    renderEvents();
  } catch (error) {
    console.error("Проблема в вашем:", error);
  }
}

async function openEditModal(eventId) {
  const event = await fetchEventData(eventId);

  const editEventName = document.getElementById("editEventName");
  const editEventDescription = document.getElementById("editEventDescription");

  editEventName.value = event.title;
  editEventDescription.value = event.description;

  modalEdit.style.display = "block";
}

async function fetchEventData(eventId) {
  const response = await fetch(
    `https://aaca53d3bfb3d1d9.mokky.dev/events/${eventId}`
  );
  const eventData = await response.json();
  return eventData;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("reg-btn")) {
    const eventId = e.target.getAttribute("data-event-id");
    openEditModal(eventId);
  }
});

editForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const eventId = editForm.getAttribute("data-event-id");
  const updatedEventData = {
    title: editEventName.value.trim(),
    description: editEventDescription.value.trim(),
  };
  await updateEvent(eventId, updatedEventData);
  modalEdit.style.display = "none";
});

async function updateEvent(eventId, eventData) {
  try {
    const response = await fetch(
      `https://aaca53d3bfb3d1d9.mokky.dev/events/${eventId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      }
    );
    if (!response.ok) {
      throw new Error("Данные на сервер не отправляются");
    }
    const data = await response.json();
    console.log(data);
    renderEvents(); 
  } catch (error) {
    console.error("Проблема в вашем:", error);
  }
}

function openEditModal(eventId) {
  fetchEventData(eventId)
    .then((event) => {
      editEventName.value = event.title;
      editEventDescription.value = event.description;

      editForm.setAttribute("data-event-id", eventId);

      modalEdit.style.display = "block";
    })
    .catch((error) => {
      console.error("Проблема в вашем fetche:", error);
    });
}

document.addEventListener("DOMContentLoaded", renderEvents);
document.addEventListener("DOMContentLoaded", deleteEvent);
document.addEventListener("DOMContentLoaded", updateEvent);

const buttonEdit = document.querySelector(".btn-edit");
const modalTwo = document.querySelector(".modalTwo");
const modalContent = document.querySelector(".modal-contentTwo");
const closeModal = document.querySelector(".close");

buttonEdit.addEventListener("click", async () => {
  try {
    const response = await fetch("https://aaca53d3bfb3d1d9.mokky.dev/guys");
    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }

    const data = await response.json();
    const modalBody = modalContent.querySelector(".modal-body");
    let html = "";

    data.forEach((person) => {
      if (person.status === "active") {
        html += `
                  <div>
                      <p>Имя персоны - ${person.userName}</p>
                      <p>ID мероприятия - ${person.eventId}</p>
                      <button class="delete-person-btn" data-person-id="${person.id}">Удалить</button>
                      <button class="accept-person-btn" data-person-id="${person.id}">Принять</button>
                  </div>
              `;
      }
    });

    modalBody.innerHTML = html;
    modalTwo.style.display = "block";
  } catch (error) {
    console.error("Ошибка произошла:", error);
  }
});

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("edit-person-btn")) {
    const personId = e.target.getAttribute("data-person-id");
  } else if (e.target.classList.contains("delete-person-btn")) {
    const personId = e.target.getAttribute("data-person-id");
    try {
      const response = await fetch(
        `https://aaca53d3bfb3d1d9.mokky.dev/guys/${personId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка удаления персоны");
      }
      alert("Персона успешно удалена!");
      renderPeople();
    } catch (error) {
      console.error("Произошла ошибка при удалении персоны:", error.message);
    }
  } else if (e.target.classList.contains("accept-person-btn")) {
    const personId = e.target.getAttribute("data-person-id");
    alert("Персона успешно принята!");
  }
});

closeModal.addEventListener("click", () => {
  modalTwo.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalTwo) {
    modalTwo.style.display = "none";
  }
});

async function renderPeople() {
  try {
    const response = await fetch("https://aaca53d3bfb3d1d9.mokky.dev/guys");
    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }

    const data = await response.json();
    const modalBody = modalContent.querySelector(".modal-body");
    let html = "";

    data.forEach((person) => {
      if (person.status === "active") {
        html += `
          <div>
            <p>Имя персоны -${person.userName}</p>
            <p>ID мероприятия - ${person.eventId}</p>
            <button class="delete-person-btn" data-person-id="${person.id}">Удалить</button>
            <button class="accept-person-btn" data-person-id="${person.id}">Принять</button>
          </div>
              `;
      }
    });

    modalBody.innerHTML = html;
  } catch (error) {
    console.error("Ошибка при рендеринге списка персон:", error);
  }
}

document
  .querySelector(".accept-event-btn")
  .addEventListener("click", async () => {
    alert("Пользователь принят!");
    modalTwo.style.display = "none";
  });

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete-event-btn")) {
    const eventId = e.target.getAttribute("data-event-id");
    try {
      const response = await fetch(
        `https://aaca53d3bfb3d1d9.mokky.dev/events/${eventId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка удаления события");
      }
      alert("Событие успешно удалено!");
      renderEvents();
    } catch (error) {
      console.error("Произошла ошибка при удалении события:", error.message);
    }
  }
});
