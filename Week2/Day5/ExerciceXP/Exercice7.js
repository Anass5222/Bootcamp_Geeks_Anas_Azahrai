const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1. Collect the first letter of each name
const letters = [];

for (let i = 0; i < names.length; i++) {
  letters.push(names[i][0]);
}

// Sort alphabetically
letters.sort();

// 2. Join into one string and log it
const societyName = letters.join("");
console.log(societyName); 