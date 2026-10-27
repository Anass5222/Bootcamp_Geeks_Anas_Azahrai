
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");


const ul = document.querySelector("#socialNetworkNavigation ul");

const newLi = document.createElement("li");          
const textNode = document.createTextNode("Logout");  
newLi.appendChild(textNode);                         
ul.appendChild(newLi);                               



const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(firstLi.textContent); 
console.log(lastLi.textContent);  