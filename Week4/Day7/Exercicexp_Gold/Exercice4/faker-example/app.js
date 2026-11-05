const { faker } = require("@faker-js/faker");
const readline = require("readline");

const users = [];

function addFakeUser() {
  users.push({
    name: faker.person.fullName(),
    street: faker.location.streetAddress(),
    country: faker.location.country(),
  });
}

// Bonus : poser une question et retourner la réponse (promesse)
function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function addUserFromPrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const name = await ask(rl, "Enter your name: ");
  const street = await ask(rl, "Enter your address street: ");
  const country = await ask(rl, "Enter your country: ");

  rl.close();
  users.push({ name, street, country });
}

async function main() {
  addFakeUser();
  addFakeUser();
  addFakeUser();

  await addUserFromPrompt();

  console.log(users);
}

main();