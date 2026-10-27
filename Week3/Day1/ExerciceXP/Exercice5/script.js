// 2.1 Retrieve the div and log it
const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");

// 2.2 Change "Pete" to "Richard"
lists[0].children[1].textContent = "Richard";

// 2.3 Delete the second <li> of the second <ul> (Sarah)
lists[1].children[1].remove();

// 2.4 Change the first <li> of each <ul> to Anas
for (let i = 0; i < lists.length; i++) {
  lists[i].firstElementChild.textContent = "Anas";
}

// 3.1 Add the class student_list to both <ul>
for (let i = 0; i < lists.length; i++) {
  lists[i].classList.add("student_list");
}

// 3.2 Add the classes university and attendance to the first <ul>
lists[0].classList.add("university", "attendance");

// 4.1 Light blue background and padding on the div
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// 4.2 Hide the <li> containing "Dan" (now the last <li> of the second <ul>)
lists[1].lastElementChild.style.display = "none";

// 4.3 Add a border to the <li> containing "Richard"
lists[0].children[1].style.border = "2px solid black";

// 4.4 Change the font size of the whole body
document.body.style.fontSize = "20px";

// 5. Bonus: alert if the div's background is light blue
if (container.style.backgroundColor === "lightblue") {
  const x = lists[0].children[0].textContent;
  const y = lists[0].children[1].textContent;
  alert(`Hello ${x} and ${y}`);
}