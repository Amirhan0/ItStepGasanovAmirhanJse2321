const loginUser = document.querySelector(".login");
const passwordUser = document.querySelector(".password");
const button = document.querySelector("form");
const url = "https://aaca53d3bfb3d1d9.mokky.dev/users";

button.addEventListener("submit", async (e) => {
  e.preventDefault();
  const login = loginUser.value.trim();
  const password = passwordUser.value.trim();

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (login === "admin" && password === "admin12345") {
      addLocalStorage(login, password);
      window.location.href = "https://amirhan0.github.io/ItStepGasanovAmirhanJse2321/homework/js22/admin/loginadmin.html";
      return;
    }

    let userAuthenticated = false;

    data.forEach((element) => {
      if (element.login === login && element.passwordUser === password) {
        userAuthenticated = true;
        addLocalStorage(login, password);
      }
    });

    if (userAuthenticated) {
      window.location.href = "https://amirhan0.github.io/ItStepGasanovAmirhanJse2321/homework/js22/main/events.html";
    } else {
      showError("Неверный логин или пароль");
    }
  } catch (error) {
    console.error("Ошибка fetch:", error);
  }
});

function showError(message) {
  const error = document.querySelector(".error-message");
  error.textContent = message;
  error.style.display = "block";
}

function addLocalStorage(login, password) {
  localStorage.setItem("login", login);
  localStorage.setItem("password", password);
}
