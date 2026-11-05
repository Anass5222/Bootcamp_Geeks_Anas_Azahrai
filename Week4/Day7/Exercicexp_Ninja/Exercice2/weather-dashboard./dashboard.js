const readline = require("readline");
const chalk = require("chalk");
const getWeather = require("./weather");

function startDashboard() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(chalk.cyan.bold("=== Weather Dashboard ==="));
  console.log(chalk.gray('Type a city name, or "exit" to quit.\n'));

  function askCity() {
    rl.question(chalk.magenta("Enter a city name: "), async (city) => {
      const cleanCity = city.trim();

      if (cleanCity.toLowerCase() === "exit") {
        console.log(chalk.cyan("Goodbye!"));
        rl.close();
        return;
      }

      if (cleanCity === "") {
        console.log(chalk.red("Please enter a city name.\n"));
      } else {
        await getWeather(cleanCity);
      }

      askCity(); // redemander une ville
    });
  }

  askCity();
}

module.exports = startDashboard;