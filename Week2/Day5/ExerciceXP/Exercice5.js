// 1. Create the family object
const family = {
  father: "Bilal",
  mother: "Sara",
  brother: "Omar",
  sister: "Houda",
};

// 2. Log the keys
for (const key in family) {
  console.log(key);
}

// 3. Log the values
for (const key in family) {
  console.log(family[key]);
}
