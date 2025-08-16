let search = document.getElementById("input");
let image = document.getElementById("img");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let apiKey = "c89c4b63d1ee75e9278cf8525af181cb";

function getWeather() {
  let city = search.value; 

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data); 

      h2.textContent = data.name; 
      h1.textContent = `${data.main.temp}°C`; 
      p1.textContent = `Wind Speed: ${data.wind.speed} m/s`; 
      p2.textContent = `Humidity: ${data.main.humidity}%`; 
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    })
    .catch(error => console.error("Error:", error));
}
