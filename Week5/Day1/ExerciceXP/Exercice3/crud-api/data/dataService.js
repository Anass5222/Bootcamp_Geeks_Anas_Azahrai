// 1. Import Axios
const axios = require("axios");

// 2. Create the fetchPosts function
async function fetchPosts() {
    try {
        // 3. Make a GET request to JSONPlaceholder
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );

        // 4. Return the posts data
        return response.data;

    } catch (error) {
        console.error("Error fetching posts:", error.message);
        throw error;
    }
}

// 5. Export the function
module.exports = { fetchPosts };

