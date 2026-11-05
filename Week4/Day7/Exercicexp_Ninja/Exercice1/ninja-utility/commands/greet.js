const chalk = require("chalk");

function greet(name) {
  console.log(chalk.green.bold(`Hello, ${name}!`));
  console.log(chalk.yellow("Welcome to ") + chalk.cyan.bold("ninja-utility"));
  console.log(chalk.magenta("Have a great day, ninja!"));
}

module.exports = greet;