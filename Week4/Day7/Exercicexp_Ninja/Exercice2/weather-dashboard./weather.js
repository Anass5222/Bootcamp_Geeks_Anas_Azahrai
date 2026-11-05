const axios = require("axios");
const chalk = require("chalk");

// Codes météo Open-Meteo -> description
const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Heavy rain showers",
  82: "Violent rain showers",
  95: "Thunderstorm",
  96: "Thunderstorm with hail",
  99: "Thunderstorm with heavy hail",
};

async function getWeather(city) {
  try {
    // 1. Trouver les coordonnées de la ville
    const geoResponse = await axios.get(
      "https://geocoding-api.open-meteo.com/v1/search",
      { params: { name: city, count: 1 }, timeout: 8000 }
    );

    const results = geoResponse.data.results;

    if (!results || results.length === 0) {
      console.log(chalk.red(`City "${city}" not found.`));
      return;
    }

    const { name, country, latitude, longitude } = results[0];

    // 2. Récupérer la météo actuelle
    const weatherResponse = await axios.get(
      "https://api.open-meteo.com/v1/forecast",
      {
        params: { latitude, longitude, current_weather: true },
        timeout: 8000,
      }
    );

    const current = weatherResponse.data.current_weather;
    const description = weatherCodes[current.weathercode] || "Unknown";

    // 3. Afficher avec des couleurs
    console.log(chalk.blue.bold(`\nWeather in ${name}, ${country}`));
    console.log(chalk.white("Temperature:"), chalk.red(`${current.temperature} °C`));
    console.log(chalk.white("Description:"), chalk.yellow(description));
    console.log(chalk.white("Wind speed: "), chalk.green(`${current.windspeed} km/h`));
    console.log(chalk.white("Time:       "), chalk.gray(current.time));
    console.log();
  } catch (error) {
    console.log(chalk.red("Error while fetching weather:"), error.message);
  }
}

module.exports = getWeather;