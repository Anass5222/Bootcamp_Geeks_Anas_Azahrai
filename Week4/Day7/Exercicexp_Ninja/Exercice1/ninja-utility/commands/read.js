const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

function readFile(file) {
  const filePath = path.resolve(file);

  if (!fs.existsSync(filePath)) {
    console.log(chalk.red(`File not found: ${filePath}`));
    return;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  console.log(chalk.blue.bold(`Content of ${file}:`));
  console.log(content);
}

module.exports = readFile;