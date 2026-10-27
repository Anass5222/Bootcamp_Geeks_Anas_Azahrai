const prompt = require("prompt-sync")();
// 1. Hotel cost
function hotelCost() {
  let nights;

  do {
    nights = prompt("How many nights would you like to stay in the hotel?");
  } while (nights === null || nights.trim() === "" || isNaN(nights));

  return Number(nights) * 140;
}

// 2. Plane ride cost
function planeRideCost() {
  let destination;

  do {
    destination = prompt("What is your destination?");
  } while (destination === null || destination.trim() === "" || !isNaN(destination));

  destination = destination.trim().toLowerCase();

  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}

// 3. Rental car cost
function rentalCarCost() {
  let days;

  do {
    days = prompt("How many days would you like to rent the car?");
  } while (days === null || days.trim() === "" || isNaN(days));

  days = Number(days);
  let cost = days * 40;

  if (days > 10) {
    cost = cost * 0.95; 
  }

  return cost;
}

// 4. Total vacation cost
function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);

  return car + hotel + plane;
}

// 5. Call the function
console.log("Total: $" + totalVacationCost());