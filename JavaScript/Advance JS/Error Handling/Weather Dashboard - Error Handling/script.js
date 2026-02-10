// function getWeather(city) {
//   let API_KEY = "f4ff20bf05f1b5461bf2dd805d05a377";

//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
//   )
//     .then((raw) => raw.json())
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
// }

// getWeather("London");

// Using Async-Await

async function getWeather(city) {
  try {
    let API_KEY = "f4ff20bf05f1b5461bf2dd805d05a377";

    let rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!rawData.ok) {
      throw new Error("Something Went Wrong!");
    }

    let res = await rawData.json();
    if (res.main.temp < 0) {
      throw new Error(`Temperature is very Low!!! - ${res.main.temp}`);
    } else if (res.main.temp > 38) {
      throw new Error(`Temperature is very Hot!!! - ${res.main.temp}`);
    } else {
      console.log(res);
    }
  } catch (err) {
    console.error(err.message);
  }
}

getWeather("Cape Town");
