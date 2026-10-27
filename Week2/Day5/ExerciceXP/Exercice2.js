const colors = ["blue", "red", "green", "purple", "orange"];

// 2. Log each choice with its number
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// 3. Bonus: correct suffixes (1st, 2nd, 3rd, 4th, 5th)
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
