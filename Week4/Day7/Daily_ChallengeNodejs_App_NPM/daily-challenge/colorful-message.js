const chalk = require("chalk");

function displayColorfulMessage() {
  console.log(chalk.green.bold("Hello from the daily challenge!"));
  console.log(chalk.yellow("Node.js ") + chalk.cyan("modules ") + chalk.magenta.underline("are fun!"));
  console.log(chalk.bgBlue.white(" Task 2 completed "));
}

module.exports = displayColorfulMessage;