const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg"
people.shift();


// 2. Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";

// 3. Add Anas to the end
people.push("Anas");

// 4. Log Mary's index
console.log(people.indexOf("Mary")); 

// 5. Copy the array without "Mary" and  "Anas"
const copy = people.slice(1, 3);
console.log(copy); 

// 6. Index of "Foo"
console.log(people.indexOf("Foo"));

// 7. Last element
const last = people[people.length - 1];
console.log(last); 

const people = ["Mary", "Devon", "Jason", "Yourname"];

// 1. Log each person
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Log people until "Devon", then exit the loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}