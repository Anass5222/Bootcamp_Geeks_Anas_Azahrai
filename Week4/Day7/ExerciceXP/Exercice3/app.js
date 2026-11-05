const path = require("path");
const { readFile, writeFile } = require("./fileManager");

const helloPath = path.join(__dirname, "Hello World.txt");
const byePath = path.join(__dirname, "Bye World.txt");

const content = readFile(helloPath);
console.log("Content of Hello World.txt:", content);

writeFile(byePath, "Writing to the file");
console.log("Bye World.txt has been updated.");

console.log("New content of Bye World.txt:", readFile(byePath));