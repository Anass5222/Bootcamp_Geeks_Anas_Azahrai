// 1. The shopping list: an empty array
let shoppingList = [];

// The one element of the page
const root = document.getElementById("root");

// 2. The form: a text input and an "AddItem" button
const form = document.createElement("form");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "What do you need to buy?";

const addButton = document.createElement("button");
addButton.type = "submit";
addButton.textContent = "AddItem";

form.append(input, addButton);

// The list that shows the items on the page, so you can see the result
const list = document.createElement("ul");

// 4. The ClearAll button
const clearButton = document.createElement("button");
clearButton.type = "button"; // does not submit the form
clearButton.textContent = "ClearAll";

// Add everything to the DOM
root.append(form, list, clearButton);

// Shows the array on the page: one <li> per item
function renderList() {
  list.innerHTML = "";
  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// 3. Adds the typed item to the array when AddItem is clicked
function addItem(event) {
  event.preventDefault(); // stops the page from reloading

  const item = input.value.trim();
  if (item === "") return; // ignores empty input

  shoppingList.push(item);
  console.log(shoppingList);

  input.value = "";
  renderList();
}

// 5. Empties the shopping list
function clearAll() {
  shoppingList = [];
  console.log(shoppingList);
  renderList();
}

// Connect the events
form.addEventListener("submit", addItem);
clearButton.addEventListener("click", clearAll);