import persons from "./data.js";

function printAverageAge(people) {
  if (people.length === 0) {
    console.log("The array is empty, no average to calculate.");
    return;
  }

  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / people.length;

  console.log(`Average age: ${average}`);
}

printAverageAge(persons);