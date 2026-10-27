
// 1. Retrieve the form and log it 
const form = document.querySelector("form");
console.log(form);

// 2. Retrieve the inputs by their id and log them 
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
console.log(firstNameInput, lastNameInput);

//  3. Retrieve the inputs by their name attribute and log them 

const byFirstName = document.getElementsByName("firstname");
const byLastName = document.getElementsByName("lastname");
console.log(byFirstName, byLastName);

// 4. Handle the submit 
const usersAnswer = document.querySelector(".usersAnswer");

form.addEventListener("submit", (event) => {
  
  event.preventDefault();

 
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (firstName === "" || lastName === "") {
    alert("Please fill in both fields.");
    return;
  }

  // Empty the previous answer, so only the latest submission is shown
  usersAnswer.innerHTML = "";

  // One <li> per value, appended to the <ul>
  const values = [firstName, lastName];
  values.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    usersAnswer.appendChild(li);
  });
});