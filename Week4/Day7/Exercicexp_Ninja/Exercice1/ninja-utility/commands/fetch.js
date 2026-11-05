const axios = require("axios");
const chalk = require("chalk");

async function fetchWeather(options) {
  const url = "https://api.open-meteo.com/v1/forecast";

  try {
    const response = await axios.get(url, {
      params: {
        latitude: options.lat,
        longitude: options.lon,
        current_weather: true,
      },
      timeout: 8000,
    });

    const weather = response.data.current_weather;

    console.log(chalk.blue.bold("Current weather:"));
    console.log(chalk.white("Temperature:"), chalk.red(`${weather.temperature} °C`));
    console.log(chalk.white("Wind speed:"), chalk.green(`${weather.windspeed} km/h`));
    console.log(chalk.white("Time:"), weather.time);
  } catch (error) {
    console.log(chalk.red("Error while fetching data:"), error.message);
  }
}

module.exports = fetchWeather;