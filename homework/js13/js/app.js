const movieHtml = document.querySelector(".movies");

movies.forEach((item, index) => {
  let movieAverageClass = "";
  let rating = parseInt(item.rating);
  if (rating >= 90) {
    movieAverageClass = "movie__average--green";
  } else if (rating >= 70 && rating < 90) {
    movieAverageClass = "movie__average--orange";
  } else {
    movieAverageClass = "movie__average--red";
  }
  movieHtml.insertAdjacentHTML(
    "beforeend",
    `
    <div class="movie" onclick="openModal('${item.name}', '${item.category.join(
      ", "
    )}', '${item.description}')">
      <div class="movie__cover-inner">
        <img src="img/${item.image}" class="movie__cover" alt="${item.name}" />
        <div class="movie__cover--darkened"></div>
      </div>
      <div class="movie__info">
        <div class="movie__title">${item.name}</div>
        <div class="movie__category">${item.category.join(", ")}</div>
        <div class="movie__average ${movieAverageClass}">${
      item.rating / 10
    }</div>
      </div>
    </div>`
  );
});

function openModal(name, category, description) {
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Категории:</strong> ${category}</p>
    <p>${description}</p>
  `;
  document.getElementById("modal").style.display = "block";
  window.addEventListener("click", outsideClick);
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    window.removeEventListener("click", outsideClick);
  }
}

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});



function searchMovies() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  let movies = document.getElementsByClassName("movie");

  for (let i = 0; i < movies.length; i++) {
    let title = movies[i].getElementsByClassName("movie__title")[0];
    if (title.innerHTML.toLowerCase().indexOf(input) > -1) {
      movies[i].style.display = "";
    } else {
      movies[i].style.display = "none";
    }
  }
}
document.getElementById("searchInput").addEventListener("keyup", searchMovies);
