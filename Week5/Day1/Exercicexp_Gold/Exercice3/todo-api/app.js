const express = require("express");

// Create Express application
const app = express();

// Define server port
const PORT = 5000;

// Middleware to read JSON data
app.use(express.json());


// Array to store todos
const todos = [];

// Generate unique IDs
let nextId = 1;

app.post("/api/todos", (req, res) => {

    try {

        // Get data from request body
        const { title, completed } = req.body || {};

        // Validate title
        if (
            typeof title !== "string" ||
            !title.trim()
        ) {
            return res.status(400).json({
                message: "Title is required."
            });
        }

        // Validate completed
        if (
            completed !== undefined &&
            typeof completed !== "boolean"
        ) {
            return res.status(400).json({
                message: "Completed must be a boolean."
            });
        }

        // Create new todo
        const newTodo = {
            id: nextId++,
            title: title.trim(),
            completed: completed ?? false
        };

        // Add todo to array
        todos.push(newTodo);

        console.log("Todo created successfully!");

        // Send response
        return res.status(201).json({
            message: "Todo created successfully!",
            todo: newTodo
        });

    } catch (error) {

        console.error("Error creating todo:", error.message);

        return res.status(500).json({
            message: "Internal server error."
        });
    }
});


app.get("/api/todos", (req, res) => {

    try {

        // Return all todos
        console.log("All todos retrieved successfully!");

        return res.status(200).json(todos);

    } catch (error) {

        console.error("Error retrieving todos:", error.message);

        return res.status(500).json({
            message: "Error retrieving todos."
        });
    }
});


app.get("/api/todos/:id", (req, res) => {

    try {

        // Get ID from URL
        const id = Number(req.params.id);

        // Validate ID
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                message: "Invalid todo ID."
            });
        }

        // Find todo by ID
        const todo = todos.find(todo => todo.id === id);

        // Check if todo exists
        if (!todo) {
            return res.status(404).json({
                message: "Todo not found."
            });
        }

        console.log(`Todo ${id} retrieved successfully!`);

        // Return specific todo
        return res.status(200).json(todo);

    } catch (error) {

        console.error("Error retrieving todo:", error.message);

        return res.status(500).json({
            message: "Error retrieving todo."
        });
    }
});


app.put("/api/todos/:id", (req, res) => {

    try {

        // Get ID from URL
        const id = Number(req.params.id);

        // Validate ID
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                message: "Invalid todo ID."
            });
        }

        // Find todo
        const todo = todos.find(todo => todo.id === id);

        // Check if todo exists
        if (!todo) {
            return res.status(404).json({
                message: "Todo not found."
            });
        }

        // Get updated data
        const { title, completed } = req.body || {};

        // Check if at least one field is provided
        if (title === undefined && completed === undefined) {
            return res.status(400).json({
                message: "Provide title or completed to update."
            });
        }

        // Validate title
        if (
            title !== undefined &&
            (typeof title !== "string" || !title.trim())
        ) {
            return res.status(400).json({
                message: "Title must be a non-empty string."
            });
        }

        // Validate completed
        if (
            completed !== undefined &&
            typeof completed !== "boolean"
        ) {
            return res.status(400).json({
                message: "Completed must be a boolean."
            });
        }

        // Update todo
        if (title !== undefined) {
            todo.title = title.trim();
        }

        if (completed !== undefined) {
            todo.completed = completed;
        }

        console.log(`Todo ${id} updated successfully!`);

        // Send updated todo
        return res.status(200).json({
            message: "Todo updated successfully!",
            todo: todo
        });

    } catch (error) {

        console.error("Error updating todo:", error.message);

        return res.status(500).json({
            message: "Error updating todo."
        });
    }
});


app.delete("/api/todos/:id", (req, res) => {

    try {

        // Get ID from URL
        const id = Number(req.params.id);

        // Validate ID
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                message: "Invalid todo ID."
            });
        }

        // Find todo index
        const todoIndex = todos.findIndex(
            todo => todo.id === id
        );

        // Check if todo exists
        if (todoIndex === -1) {
            return res.status(404).json({
                message: "Todo not found."
            });
        }

        // Remove todo from array
        const deletedTodo = todos.splice(todoIndex, 1)[0];

        console.log(`Todo ${id} deleted successfully!`);

        // Send response
        return res.status(200).json({
            message: "Todo deleted successfully!",
            todo: deletedTodo
        });

    } catch (error) {

        console.error("Error deleting todo:", error.message);

        return res.status(500).json({
            message: "Error deleting todo."
        });
    }
});


app.use((req, res) => {

    return res.status(404).json({
        message: "Route not found."
    });

});


app.use((error, req, res, next) => {

    if (error instanceof SyntaxError && error.status === 400) {
        return res.status(400).json({
            message: "Invalid JSON format."
        });
    }

    console.error(error);

    return res.status(500).json({
        message: "Internal server error."
    });
});


app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});
