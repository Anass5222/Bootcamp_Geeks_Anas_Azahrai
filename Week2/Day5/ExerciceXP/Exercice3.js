// 1. Prompt the user for a number
let number = prompt("Enter a number:");
console.log(typeof number); // "string"

// Convert the string to a number
number = Number(number);
console.log(typeof number); // "number"

// 2. Keep asking while the number is smaller than 10
do {
  number = Number(prompt("Enter a number (10 or bigger):"));
} while (number < 10);

console.log("Thanks! You entered " + number);