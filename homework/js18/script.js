const mealResult = document.querySelector(".meal-result");
const btn = document.querySelector(".search-btn");
const mealContent = document.querySelector(".meal-details-content");

async function meal(search) {
  const api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
  const response = await fetch(api);
  const data = await response.json();

  if (data.meals) {
    mealResult.innerHTML = "";
    data.meals.forEach((meal) => {
      const mealHtml = `
        <div class="meal-item">
          <div class="meal-img">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          </div>
          <div class="meal-name">
            <h3>${meal.strMeal}</h3>
            <a href="#" class="recipe-btn" data-meal-id="${meal.idMeal}">Get Recipe</a>
          </div>
        </div>
      `;
      mealResult.insertAdjacentHTML("beforeend", mealHtml);
    });
  }
}

btn.addEventListener("click", () => {
  const searchInput = document.querySelector("#search-input").value;
  meal(searchInput);
});

async function getRecipe(mealId) {
  const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId} `;
  const response = await fetch(api);
  const data = await response.json();

  if (data.meals) {
    const meal = data.meals[0];
    const recipeHtml = `
      <h2 class="recipe-title">${meal.strMeal}</h2>
      <p class="recipe-category">${meal.strCategory}</p>
      <div class="recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
      </div>
      <div class="recipe-meal-img">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      </div>
      <div class="recipe-link">
        <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
      </div>
    `;
    mealContent.innerHTML = recipeHtml;
  }
}

mealResult.addEventListener("click", (event) => {
  if (event.target.classList.contains("recipe-btn")) {
    const mealId = event.target.getAttribute("data-meal-id");
    document.querySelector(".meal-details").classList.add("showRecipe");
    event.preventDefault();
    console.log(mealId);
    getRecipe(mealId);
  }
});

document.querySelector("#recipe-close-btn").addEventListener("click", () => {
  document.querySelector(".meal-details").classList.remove("showRecipe");
});
