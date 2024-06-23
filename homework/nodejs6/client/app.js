// const nameInput = document.getElementById("name-input");
// const jobInput = document.getElementById("job-input");
// const createButton = document.getElementById("create-button");
const mainContainer = document.querySelector(".container-2");
// createButton.addEventListener("click", () => {
//   const name = nameInput.value;
//   const job = jobInput.value;
//   console.log(name);
//   console.log(job);
//   if (name && job) {
//     const information = `
//      <div class="container">
//     <div class="text">
//       <span class="name">${name}</span>
//       <p class="descp">${job}</p>
//       <div class="buttons">
//         <button class="picked">Отметь</button>
//         <button class="del">Удалить</button>
//       </div>
//     </div>
//   </div>

//     `;
//     mainContainer.insertAdjacentHTML("beforeend", information);
//     console.log(mainContainer);
//     console.log(information);
//   }

//   mainContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("picked")) {
//       const container = event.target.closest(".container");
//       const name = container.querySelector(".name");

//       if (name) {
//         name.style.color = "red";
//       }
//     }
//     if (event.target.classList.contains("del")) {
//       const container = event.target.closest(".container");
//       if (container) {
//         container.remove();
//       }
//     }
//   });
// });

// Функция для отправки HTTP запросов
async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;
    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }
    const response = await fetch(url, {
      method,
      headers,
      body,
    });
    return await response.json();
  } catch (error) {
    console.error("Request error:", error);
    // Обработка ошибок, например, вывод сообщения пользователю или логирование
  }
}

// Функция для загрузки данных о контактах и отображения на странице
async function loadContacts() {
  try {
    const data = await request("/api/contacts");
    data.forEach((item) => {
      const html = `
        <div class="container">
          <div class="text">
            <span class="name">${item.nameUser}</span>
            <p class="descp">${item.positionUser}</p>
            <div class="buttons">
              <button class="picked">Отметь</button>
              <button class="del" data-id="${item._id}">Удалить</button> <!-- Добавлен data-id для хранения ID позиции -->
            </div>
          </div>
        </div>
      `;
      mainContainer.insertAdjacentHTML("beforeend", html);
    });

    document.querySelectorAll(".del").forEach((button) => {
      button.addEventListener("click", async (e) => {
        const positionId = e.target.dataset.id;
        await deletePosition(positionId);
        window.location.reload();
      });
    });
  } catch (error) {
    console.error("Error loading contacts:", error);
  }
}

// Функция для создания новой позиции
async function createPosition(nameUser, positionUser) {
  if (nameUser && positionUser) {
    const data = {
      nameUser,
      positionUser,
    };
    try {
      const response = await request("/api/position", "POST", data);
      console.log("New position created:", response);
    } catch (error) {
      console.error("Error creating position:", error);
    }
  }
}

// Функция для удаления позиции
async function deletePosition(positionId) {
  try {
    const response = await request(`/api/position/${positionId}`, "DELETE");
    console.log("Position deleted:", response);
  } catch (error) {
    console.error("Error deleting position:", error);
  }
}

// Вызываем загрузку контактов при загрузке страницы
loadContacts();

// Добавляем обработчик события на форму для создания новой позиции
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nameUser = document.getElementById("name-input").value;
  const positionUser = document.getElementById("job-input").value;
  createPosition(nameUser, positionUser);
  window.location.reload(); // Перезагружаем страницу после создания (можно изменить на обновление части страницы)
});
