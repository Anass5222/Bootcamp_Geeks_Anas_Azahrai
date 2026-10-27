// 2 & 3. Array of book objects
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
    alreadyRead: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    alreadyRead: false,
  },
];

// 4. Render each book inside the section
const section = document.querySelector(".listBooks");

for (let i = 0; i < allBooks.length; i++) {
  const book = allBooks[i];

  // One div per book
  const bookDiv = document.createElement("div");

  // Details: title and author
  const details = document.createElement("p");
  details.textContent = `${book.title} written by ${book.author}`;

  // Image with a width of 100px
  const img = document.createElement("img");
  img.src = book.image;
  img.alt = book.title;
  img.style.width = "100px";

  // Red text if the book is already read
  if (book.alreadyRead) {
    details.style.color = "red";
  }

  bookDiv.appendChild(details);
  bookDiv.appendChild(img);
  section.appendChild(bookDiv);
}