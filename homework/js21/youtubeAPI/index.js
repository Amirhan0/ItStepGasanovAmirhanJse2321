const button = document.querySelector(".btn");
const input = document.querySelector(".inp");
const maxResults = 50;
button.addEventListener("click", () => {
  const key = "AIzaSyArGQwHBnHR-iGbntX8Zvty0AYzi6kS0WY";
  const query = input.value.trim();
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults=${maxResults}`;
  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    document.querySelector(".container").innerHTML = "";

    data.items.forEach((item) => {
      const title = item.snippet.title;
      const description = item.snippet.description;
      const thumbnail = item.snippet.thumbnails.high.url;
      const id = item.id.videoId;
      const encodedQuery = encodeURIComponent(title);
      const vidHtml = `
        <div class="video">
          <h2>${title}</h2> 
          <p>${description}</p>
          <img src="${thumbnail}" alt="${encodedQuery}" data-id="${id}">
        </div>
      `;

      document
        .querySelector(".container")
        .insertAdjacentHTML("beforeend", vidHtml);
    });

    const images = document.querySelectorAll(".container img");
    images.forEach((image) => {
      image.addEventListener("click", () => {
        const videoId = image.getAttribute("data-id");
        const html = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;

        document.querySelector("#videoModal").innerHTML = html;

        openModal();
      });
    });
  }
  function openModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  const closebtn = document.getElementById("closeModalBtn");
  closebtn.onclick = () => {
    modal.style.display = "none";
  };

  window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  });
  getData();
});



