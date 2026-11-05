const express = require("express");

const app = express();
const PORT = 3000;

// Middleware : lit le JSON envoyé dans le corps des requêtes
app.use(express.json());

// "Base de données" simulée
let posts = [
  { id: 1, title: "My first post", content: "Hello, this is my first blog post." },
  { id: 2, title: "Learning Express", content: "Express makes building APIs easy." },
  { id: 3, title: "REST APIs", content: "GET, POST, PUT and DELETE are the main verbs." },
];

// GET /posts : tous les posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// GET /posts/:id : un post précis
app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }

  res.json(post);
});

// POST /posts : créer un post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Both title and content are required." });
  }

  const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
  const newPost = { id: newId, title, content };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id : modifier un post
app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }

  const { title, content } = req.body;

  if (!title && !content) {
    return res.status(400).json({ error: "Provide a title and/or a content to update." });
  }

  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

// DELETE /posts/:id : supprimer un post
app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }

  const deleted = posts.splice(index, 1)[0];
  res.json({ message: "Post deleted.", post: deleted });
});

// Gestion des routes invalides (404)
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found.` });
});

// Gestion des erreurs serveur (4 paramètres obligatoires)
app.use((err, req, res, next) => {
  console.error(err.stack);

  // JSON invalide dans le corps de la requête
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON in request body." });
  }

  res.status(500).json({ error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});