const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display each color with its rank.
// entries() gives [index, color] pairs, and [index, color] destructures each pair
for (const [index, color] of colors.entries()) {
  console.log(`${index + 1}# choice is ${color}.`);
}

// 2. some() returns true if at least one element matches
const hasViolet = colors.some((color) => color === "Violet");

if (hasViolet) {
  console.log("Yeah");
} else {
  console.log("No...");
}