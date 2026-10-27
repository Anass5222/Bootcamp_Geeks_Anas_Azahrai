function changeEnough(itemPrice, amountOfChange) {
  const totalCents =
    amountOfChange[0] * 25 +
    amountOfChange[1] * 10 +
    amountOfChange[2] * 5 +
    amountOfChange[3] * 1;

  return totalCents >= Math.round(itemPrice * 100);
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));  
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5]));   