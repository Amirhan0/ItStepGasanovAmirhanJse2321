document.addEventListener("DOMContentLoaded", function () {
  const formEl = document.querySelector(".form");
  const inputEl = document.querySelector(".input");
  const ulEl = document.querySelector(".list");
  const newNotes = [];
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    const titleValue = inputEl.value.trim();

    if (titleValue !== "") {
      const note = {
        title: titleValue,
        status: true,
      };

      newNotes.push(note);
      inputEl.value = "";

      ulEl.innerHTML = "";
      renderNotes();
      saveNotesToLocalStorage()
    } else {
      alert("Поле не может быть пустым");
    }
  });

  function deleteNote(index) {
    newNotes.splice(index, 1);
    ulEl.innerHTML = "";
    renderNotes();
    saveNotesToLocalStorage()
  }

  function saveNotesToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function renderNotes() {
    newNotes.forEach((note, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
                ${note.title}
                <i class="fas fa-check-square"></i>
                <i class="fas fa-trash delete"></i>
            `;
      ulEl.appendChild(li);

      const deleteIcon = li.querySelector(".delete");
      deleteIcon.addEventListener("click", function () {
        deleteNote(index);
      });

      li.addEventListener("click", () => {
        note.status = !note.status
        li.classList.toggle('checked', !note.status)
        saveNotesToLocalStorage()
      });
    });
  }
});
