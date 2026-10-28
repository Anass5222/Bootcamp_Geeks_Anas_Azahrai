const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// forEach runs the function once per color, with its position (index)
colors.forEach((color, index) => {
  const rank = index + 1; // 1, 2, 3, ...

  const suffix = rank <= 3 ? ordinal[rank] : ordinal[0];

  console.log(`${rank}${suffix} choice is ${color}.`);
});