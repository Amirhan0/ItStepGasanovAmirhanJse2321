const key = "c0e8bde454822b66ca86dc975063465b";

async function weather(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  const response = await fetch(api);
  const data = await response.json();
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const win = wind.toFixed(2);
  const country = data.name;
  const weatherCon = data.weather[0].main.toLowerCase();

  document.querySelector(".deg").textContent = `${Math.floor(temp)}°c`;
  document.querySelector(".country").textContent = `${country}`;
  document.querySelector(".hum").textContent = `${humidity}%`;
  document.querySelector(".speed").textContent = `${win}km/h`;

  const imagePath = "images/";
  let urlImage;

  switch (weatherCon) {
    case "clear":
      urlImage = `${imagePath}clear.png`;
      break;
    case "clouds":
      urlImage = `${imagePath}clouds.png`;
      break;
    case "drizzle":
      urlImage = `${imagePath}drizzle.png`;
      break;
    case "mist":
      urlImage = `${imagePath}mist.png`;
      break;
    case "rain":
      urlImage = `${imagePath}rain.png`;
      break;
    case "snow":
      urlImage = `${imagePath}snow.png`;
      break;

    default:
      urlImage = `${imagePath}clear.jpg`;
      break;
  }
  console.log(urlImage) 

  document.querySelector(".cloud").style.backgroundImage = `url(${urlImage})`;

}

document.querySelector(".poisk").addEventListener("click", () => {
  weather(document.querySelector("input").value);
});
