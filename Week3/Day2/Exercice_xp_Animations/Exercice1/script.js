
const container = document.getElementById("container");
const clearButton = document.getElementById("clear");


// Adds one <p>Hello World</p> to the container
function addParagraph() {
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}

// Returns how many <p> elements are inside the container
function countParagraphs() {
  return container.querySelectorAll("p").length;
}

// Part I: alert after 2 seconds
function showAlert() {
  alert("Hello World");
}

setTimeout(showAlert, 2000);

// Part II: add a paragraph after 2 seconds 
setTimeout(addParagraph, 2000);

//  Part III: add a paragraph every 2 seconds 
const intervalId = setInterval(() => {
  addParagraph();

  // Stop as soon as there are 5 paragraphs
  if (countParagraphs() >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

// Stop when the user clicks the button
clearButton.addEventListener("click", () => {
  clearInterval(intervalId);
});