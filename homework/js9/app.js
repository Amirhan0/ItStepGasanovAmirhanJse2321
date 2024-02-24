const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "Купи краба",
    status: true,
  },
  {
    title: "Яблоки не забудь",
    status: false,
  },
];

function render() {
  for (let note of notes) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    status: false,
  };

  listElement.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));
  inputElement.value = "";
};

function getNoteTemplate(note) {
    return `
          <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>${note.title}</span>
              <span>
              <button class="btn btn-small btn-success" onclick="noteDash(this)"">&check;</button>
              <button class="btn btn-small btn-danger" onclick="deleteNote(this)">&times;</button>
              </span>
          </li>`;
  }
  

function deleteNote(e) {
  const noteItem = e.closest('li');
  if (noteItem) {
    noteItem.remove();
  }
}

function noteDash(e) {
  const noteItem = e.closest('li');
  if (noteItem) {
      if (noteItem.style.textDecoration === "line-through") {
        noteItem.style.textDecoration = "";
      }
      else {
        noteItem.style.textDecoration = "line-through";
      }
  }
  
}