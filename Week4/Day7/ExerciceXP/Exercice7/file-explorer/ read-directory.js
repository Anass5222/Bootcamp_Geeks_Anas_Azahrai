const fs = require("fs");
const path = require("path");

// Dossier à lire : le dossier courant du script
const directoryPath = __dirname;

const files = fs.readdirSync(directoryPath);

console.log(`Files in ${directoryPath}:`);
files.forEach((file) => {
  console.log("-", file);
});
