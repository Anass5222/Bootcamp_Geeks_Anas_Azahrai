
const express = require("express");
const axios = require("axios");

// Create Express application
const app = express();

// Server configuration
const PORT = 5000;
const API_URL = "https://jsonplaceholder.typicode.com";

// Middleware to read JSON data
app.use(express.json());


app.get("/api/posts", async (req, res) => {

    try {

        // Make GET request to JSONPlaceholder
        const response = await axios.get(`${API_URL}/posts`);

        // Send all posts to the client
        console.log("All posts retrieved successfully!");

        return res.status(200).json(response.data);

    } catch (error) {

        console.error("Error retrieving posts:", error.message);

        return res.status(error.response?.status || 502).json({
            message: "Failed to retrieve posts",
            error: error.message
        });
    }
});


app.get("/api/posts/:id", async (req, res) => {

    try {

        // Get post ID from URL
        const id = Number(req.params.id);

        // Validate ID
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                message: "Invalid post ID"
            });
        }

        // Make GET request for one post
        const response = await axios.get(`${API_URL}/posts/${id}`);

        // Check if post exists
        if (
            !response.data ||
            Object.keys(response.data).length === 0
        ) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        // Send post to the client
        console.log(`Post ${id} retrieved successfully!`);

        return res.status(200).json(response.data);

    } catch (error) {

        console.error("Error retrieving post:", error.message);

        return res.status(error.response?.status || 502).json({
            message: "Failed to retrieve post",
            error: error.message
        });
    }
});



app.post("/api/posts", async (req, res) => {

    try {

        // Get new post data from request body
        const newPost = req.body;

        // Validate request body
        if (
            !newPost ||
            typeof newPost !== "object" ||
            Array.isArray(newPost) ||
            Object.keys(newPost).length === 0
        ) {
            return res.status(400).json({
                message: "Post data is required"
            });
        }

        // Make POST request to JSONPlaceholder
        const response = await axios.post(
            `${API_URL}/posts`,
            newPost
        );

        // Send created post to the client
        console.log("Post created successfully!");

        return res.status(201).json(response.data);

    } catch (error) {

        console.error("Error creating post:", error.message);

        return res.status(error.response?.status || 502).json({
            message: "Failed to create post",
            error: error.message
        });
    }
});



app.put("/api/posts/:id", async (req, res) => {

    try {

        // Get post ID from URL
        const id = Number(req.params.id);

        // Validate ID
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                message: "Invalid post ID"
            });
        }

        // Get updated data from request body
        const updatedPost = req.body;

        // Validate request body
        if (
            !updatedPost ||
            typeof updatedPost !== "object" ||
            Array.isArray(updatedPost) ||
            Object.keys(updatedPost).length === 0
        ) {
            return res.status(400).json({
                message: "Updated post data is required"
            });
        }

        // Make PUT request to JSONPlaceholder
        const response = await axios.put(
            `${API_URL}/posts/${id}`,
            updatedPost
        );

        // Send updated post to the client
        console.log(`Post ${id} updated successfully!`);

        return res.status(200).json(response.data);

    } catch (error) {

        console.error("Error updating post:", error.message);

        return res.status(error.response?.status || 502).json({
            message: "Failed to update post",
            error: error.message
        });
    }
});


app.delete("/api/posts/:id", async (req, res) => {

    try {

        // Get post ID from URL
        const id = Number(req.params.id);

        // Validate ID
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                message: "Invalid post ID"
            });
        }

        // Make DELETE request to JSONPlaceholder
        const response = await axios.delete(
            `${API_URL}/posts/${id}`
        );

        // Send confirmation to the client
        console.log(`Post ${id} deleted successfully!`);

        return res.status(200).json({
            message: `Post ${id} deleted successfully!`,
            data: response.data
        });

    } catch (error) {

        console.error("Error deleting post:", error.message);

        return res.status(error.response?.status || 502).json({
            message: "Failed to delete post",
            error: error.message
        });
    }
});


app.use((req, res) => {

    res.status(404).json({
        message: "Route not found"
    });

});



app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});
