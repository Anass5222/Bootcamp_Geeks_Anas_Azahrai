//  1. Global variable

let allBoldItems = [];


const paragraph = document.getElementById("sentence");

// 2. Collect all the bold items inside the paragraph 
function getBoldItems() {
  allBoldItems = paragraph.querySelectorAll("strong");
}

//  3. Bold text turns blue 
function highlight() {
  allBoldItems.forEach((item) => {
    item.style.color = "blue";
  });
}

// 4. Bold text goes back to black 
function returnItemsToDefault() {
  allBoldItems.forEach((item) => {
    item.style.color = "black";
  });
}

// 5. Events 
getBoldItems(); 

paragraph.addEventListener("mouseover", highlight);           
paragraph.addEventListener("mouseout", returnItemsToDefault); 