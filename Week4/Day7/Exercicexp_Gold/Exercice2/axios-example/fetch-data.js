const axios = require("axios");

async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = response.data;

    console.log(`Number of posts: ${posts.length}\n`);

    posts.forEach((post) => {
      console.log(`${post.id}. ${post.title}`);
    });
  } catch (error) {
    console.log("Error while fetching posts:", error.message);
  }
}

module.exports = fetchPosts;