function returnNumbers(str) {
  const numbers = str.match(/\d/g);
  return numbers ? numbers.join("") : "";
}

console.log(returnNumbers("k5k3q2g5z6x9bn")); 
console.log(returnNumbers("abc"));             
console.log(returnNumbers("a1b22c333"));      