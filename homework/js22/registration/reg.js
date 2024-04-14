document.addEventListener("DOMContentLoaded", function () {
  const nameUser = document.querySelector(".nameuser");
  const emailUser = document.querySelector(".email");
  const loginUser = document.querySelector(".login");
  const passwordUser = document.querySelector(".password");
  const button = document.querySelector(".button");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    let name = nameUser.value.trim();
    let email = emailUser.value.trim();
    let login = loginUser.value.trim();
    let password = passwordUser.value.trim();

    if (name === "") {
      showError(nameUser, "Поле не может быть пустым!");
      return;
    } else if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      loginUser.value = login;
    } else {
      hideError(nameUser);
    }

    if (email === "") {
      showError(emailUser, "Поле не может быть пустым!");
      return;
    } else if (!isValidEmail(email)) {
      showError(emailUser, "Неправильная форма заполнения email");
      return;
    } else {
      hideError(emailUser);
    }

    if (login === "") {
      showError(loginUser, "Поле не может быть пустым!");
      return;
    } else if (login.charAt(0) !== login.charAt(0).toUpperCase()) {
      login = login.charAt(0).toUpperCase() + login.slice(1);
    } else {
      hideError(loginUser);
    }

    if (password === "") {
      showError(passwordUser, "Поле не может быть пустым!");
      return;
    } else if (password.length <= 6) {
      showError(passwordUser, "Пароль должен содержать более 6 символов");
      return;
    } else {
      hideError(passwordUser);
    }

    sendData();
  });

  async function sendData() {
    try {
      const response = await fetch("https://aaca53d3bfb3d1d9.mokky.dev/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: loginUser.value.trim(),
          email: emailUser.value.trim(),
          passwordUser: passwordUser.value.trim(),
          userName: nameUser.value.trim(),
        }),
      });

      if (response.ok) {
        addLocalStorage(
          nameUser.value.trim(),
          emailUser.value.trim(),
          passwordUser.value.trim(),
          loginUser.value.trim()
        );
        window.location.href = "../autenf/autenf.html";
      } else {
        console.error("Ошибка при отправке данных на сервер:", response.status);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  function addLocalStorage(name, email, password, login) {
    localStorage.setItem("nameUser", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("login", login);
    localStorage.setItem("loggedIn", true); 
  }

  function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = "block";
  }

  function hideError(input) {
    const error = input.nextElementSibling;
    error.textContent = "";
    error.style.display = "none";
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
