const chalk = require("chalk");

// Couleurs de texte
console.log(chalk.red("This text is red"));
console.log(chalk.green("This text is green"));
console.log(chalk.blue("This text is blue"));

// Styles
console.log(chalk.bold("This text is bold"));
console.log(chalk.underline("This text is underlined"));
console.log(chalk.italic("This text is italic"));

// Couleur de fond
console.log(chalk.bgYellow.black(" Black text on a yellow background "));

// Combinaison de plusieurs styles
console.log(chalk.bold.magenta.underline("Bold, magenta and underlined"));

// Message coloré final
console.log(
  chalk.green("Hello") + " " + chalk.yellow("from") + " " + chalk.cyan.bold("chalk!")
);