const nameUser = document.querySelector(".name-user");
const emailUser = document.querySelector(".email-user");
const passwordUserOne = document.querySelector(".password-user");
const passwordUserTwo = document.querySelector(".password-user-2");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let name = nameUser.value;
  let email = emailUser.value;
  let passwordOne = passwordUserOne.value;
  let passwordTwo = passwordUserTwo.value;
  if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
  } else {
    hideError(nameUser);
  }

  if (email === "") {
    showError(emailUser, "Ошибка, почта не может быть пустой");
  } else if (!isValidEmail(email)) {
    showError(emailUser, "Неверный формат email-a");
  } else {
    hideError(emailUser);
  }

  if (
    passwordOne.length <= 6 &&
    passwordTwo.length <= 6 &&
    passwordOne != "" &&
    passwordTwo != ""
  ) {
    showError(passwordUserOne, "Пароль должен иметь минимум 6 символов");
  } else {
    hideError(passwordUserOne);
  }

  if (passwordOne === passwordTwo) {
    hideError(passwordUserTwo);
  } else {
    showError(passwordUserTwo, "Пароли должны совпадать");
  }

  if (name === "" || email === "" || passwordOne === "") {
    showError(nameUser, "Заполните поля");
    showError(emailUser, "Заполните поля");
    showError(passwordUserOne, "Заполните поля");
    showError(passwordUserTwo, "Заполните поля");
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunc(this.responseText);
    }
  };

  xhttp.open("POST", "https://67142066f9997d1f.mokky.dev/kanat");
  xhttp.setRequestHeader("Content-Type", "application/json");

  const dataToSend = {
    nameUser: name,
    email: email,
    password: passwordOne,
  };

  const jsonData = JSON.stringify(dataToSend);
  xhttp.send(jsonData);

  function myFunc(data) {
    console.log(data);
  }

  function addLocalStorage(nameUser, emailUser, passwordOne) {
    localStorage.setItem("nameUser", nameUser);
    localStorage.setItem("email", emailUser);
    localStorage.setItem("password", passwordOne);
    localStorage.setItem("loggedIn", true);
    window.location.href = "../sign/sign.html";
  }
  addLocalStorage(name, email, passwordOne)
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.display = "block";
  input.classList.add("error");
}

function hideError(input) {
  const error = input.nextElementSibling;
  error.textContent = "";
  error.style.display = "none";
  input.classList.remove("error");
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
