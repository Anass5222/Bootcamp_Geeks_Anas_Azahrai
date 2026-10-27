let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

// 1. Prompt for the student's name
const name = prompt("What is your name?").toLowerCase();

// 2 & 3. Check if the name is a key in the object
if (name in guestList) {
  console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
} else {
  console.log("Hi! I'm a guest.");
}