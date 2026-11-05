// 1. Import Express
const express = require("express");

// 2. Import the dataService module
const { fetchPosts } = require("./data/dataService");

// 3. Create an Express application
const app = express();

// 4. Define the port
const PORT = 5000;

// 5. Create a GET endpoint
app.get("/posts", async (req, res) => {
    try {
        // 6. Fetch posts using the dataService function
        const posts = await fetchPosts();

        // 7. Send the posts as a JSON response
        res.json(posts);

        // 8. Print a success message
        console.log("Posts successfully retrieved and sent!");

    } catch (error) {
        console.error("Error retrieving posts:", error.message);

        res.status(500).json({
            message: "Failed to retrieve posts"
        });
    }
});

// 9. Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});