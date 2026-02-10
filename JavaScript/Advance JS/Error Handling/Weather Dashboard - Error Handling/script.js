function getWeather(city) {
  let API_KEY = "f4ff20bf05f1b5461bf2dd805d05a377";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  )
    .then((raw) => raw.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

getWeather("London");

// Using Async-Await

// async function getWeather(city) {
//   let API_KEY = "f4ff20bf05f1b5461bf2dd805d05a377";

//   let data = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
//   );
//   let res = await data.json();
//   console.log(res);
// }

// getWeather("London");
