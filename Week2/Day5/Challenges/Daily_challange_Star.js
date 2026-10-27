let pattern = "";

for (let i = 1; i <= 6; i++) {
  pattern += "* ";
  console.log(pattern);
}

for (let row = 1; row <= 6; row++) {
  let line = "";

  for (let col = 1; col <= row; col++) {
    line += "* ";
  }

  console.log(line);
}

