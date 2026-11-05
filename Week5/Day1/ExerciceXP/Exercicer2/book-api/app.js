const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

// Données simulées : livres arabes, écrits en français
const books = [
  { id: 1, title: "Les Prolégomènes (Al-Muqaddima)", author: "Ibn Khaldoun", publishedYear: 1377 },
  { id: 2, title: "Les Fils de la médina (Awlad Haretna)", author: "Naguib Mahfouz", publishedYear: 1959 },
  { id: 3, title: "Les Jours (Al-Ayyam)", author: "Taha Hussein", publishedYear: 1929 },
  { id: 4, title: "Les Ailes brisées", author: "Khalil Gibran", publishedYear: 1912 },
  { id: 5, title: "Saison de la migration vers le Nord", author: "Tayeb Salih", publishedYear: 1966 },
  { id: 6, title: "Des hommes dans le soleil", author: "Ghassan Kanafani", publishedYear: 1963 },
];

// Read all : GET /api/books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Read : GET /api/books/:bookId
app.get("/api/books/:bookId", (req, res) => {
  const bookId = Number(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

// Create : POST /api/books
app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  const newBook = {
    id: books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});