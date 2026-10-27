const article = document.querySelector("article"); // method: finds the <article>
const boldButton = document.getElementById("bold-button");

// Keep the list of paragraphs before removing one (this list does not change)
const paragraphs = article.querySelectorAll("p");

// 1. Retrieve the h1 and log it 
// firstElementChild is a DOM property (no parentheses): the first element inside <article>
const h1 = article.firstElementChild;
console.log(h1);

// 2. Remove the last paragraph (DOM method)
const lastParagraph = paragraphs[paragraphs.length - 1];
article.removeChild(lastParagraph);

//  3. Click on the h2: background turns red 
const h2 = article.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

//  4. Click on the h3: hide it 
const h3 = article.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// 5. Button: make all paragraphs bold 
boldButton.addEventListener("click", () => {
  // Read the paragraphs at click time, so the removed one is not included
  article.querySelectorAll("p").forEach((p) => {
    p.style.fontWeight = "bold";
  });
});

// 6. BONUS: 
h1.addEventListener("mouseenter", () => {
  const size = Math.floor(Math.random() * 101); // 0, 1, ..., 100
  h1.style.fontSize = size + "px";
});

//7. BONUS
const secondParagraph = paragraphs[1];
secondParagraph.style.transition = "opacity 2s"; // the fade lasts 2 seconds
secondParagraph.addEventListener("mouseenter", () => {
  secondParagraph.style.opacity = "0";
});