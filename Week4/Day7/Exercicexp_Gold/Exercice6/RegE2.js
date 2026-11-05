const readline = require("readline");

// Une majuscule suivie de minuscules, un seul espace, puis pareil
const nameRegex = /^[A-Z][a-z]*\s[A-Z][a-z]*$/;

function isValidName(name) {
  return nameRegex.test(name);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your full name (example: John Doe): ", (answer) => {
  if (isValidName(answer)) {
    console.log(`"${answer}" is a valid name.`);
  } else {
    console.log(`"${answer}" is NOT valid.`);
    console.log("Rules: letters only, exactly one space, each name starts with an uppercase letter.");
  }
  rl.close();
});