const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "source.txt");
const destinationPath = path.join(__dirname, "destination.txt");

// Lire le contenu de source.txt
const content = fs.readFileSync(sourcePath, "utf-8");

// Écrire le même contenu dans destination.txt
fs.writeFileSync(destinationPath, content);

console.log("File copied successfully from source.txt to destination.txt");