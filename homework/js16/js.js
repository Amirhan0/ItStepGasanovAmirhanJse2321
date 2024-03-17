const userName = document.getElementById("username");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirmPassword");
const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const regExpName = /^[a-zA-Z0-9_]{3,16}$/;
  const regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const user = userName.value;
  const email = userEmail.value;
  const password = userPassword.value;
  const confirm = userConfirmPassword.value;

  if (!regExpName.test(user)) {
    showError(
      userName,
      "Имя должно содержать от 3 до 16 символов: включая заглавные буквы, цифры, символы"
    );
    return false;
  } else {
    hideError(userName);
  }

  if (!regExpEmail.test(email)) {
    showError(userEmail, "Неправильный формат e-mail");
    return false;
  } else {
    hideError(userEmail);
  }

  if (!regExpPassword.test(password)) {
    showError(
      userPassword,
      "Пароль должен содержать минимум 8 символов, включая минимум одну цифру, одну строчную букву и одну заглавную букву."
    );
    return false;
  } else {
    hideError(userPassword);
  }

  if (password !== confirm) {
    showError(userConfirmPassword, "Пароли не совпадают");
    return false;
  } else {
    hideError(userConfirmPassword);
  }

  document.getElementById("registerForm").submit();
});

function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  errorSpan.style.display = "block";
}

function hideError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = "";
  errorSpan.style.display = "none";
}
