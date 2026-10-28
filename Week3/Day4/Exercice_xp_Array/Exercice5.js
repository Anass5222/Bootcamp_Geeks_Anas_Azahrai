const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use reduce to combine elements into a single string with spaces in between
const combinedString = epic.reduce((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`;
});

console.log(combinedString);