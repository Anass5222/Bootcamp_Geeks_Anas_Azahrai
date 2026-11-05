const greet = require("./greeting");
const displayColorfulMessage = require("./colorful-message");
const readFileContent = require("./read-file");

// 1. Saluer l'utilisateur
console.log(greet("Anas"));

// 2. Afficher le message coloré
displayColorfulMessage();

// 3. Lire et afficher le contenu du fichier
readFileContent();