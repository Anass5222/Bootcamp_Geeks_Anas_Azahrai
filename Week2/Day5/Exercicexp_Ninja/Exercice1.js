// 1 & 2. Two objects with details and a BMI method
const person1 = {
  fullName: "ilyas Ameri",
  mass: 78,    // kg
  height: 1.75, // meters
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const person2 = {
  fullName: "Sara kltoume",
  mass: 65,
  height: 1.68,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

// 3. Function that compares the BMI of both objects
function compareBMI(a, b) {
  const bmiA = a.calcBMI();
  const bmiB = b.calcBMI();

  if (bmiA > bmiB) {
    return a.fullName;
  } else if (bmiB > bmiA) {
    return b.fullName;
  } else {
    return "Both have the same BMI";
  }
}

// 4. Display the name of the person with the largest BMI
console.log(compareBMI(person1, person2));