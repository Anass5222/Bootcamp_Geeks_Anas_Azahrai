// Load environment variables
const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, ".env")
});

// Import required modules
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create Express application
const app = express();

// Server configuration
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

// Check JWT secret
if (!JWT_SECRET) {
    console.error("JWT_SECRET is missing in .env");
    process.exit(1);
}

// Middleware to read JSON
app.use(express.json());


// Store users temporarily in an array
const users = [];

let nextUserId = 1;



app.post("/api/register", async (req, res) => {

    try {

        // Get email and password
        const { email, password } = req.body || {};

        // Check missing fields
        if (
            typeof email !== "string" ||
            typeof password !== "string" ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        // Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(normalizedEmail)) {
            return res.status(400).json({
                message: "Invalid email address."
            });
        }

        // Check if user already exists
        const existingUser = users.find(
            user => user.email === normalizedEmail
        );

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists."
            });
        }

        // Hash password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            id: nextUserId++,
            email: normalizedEmail,
            password: hashedPassword
        };

        // Store user
        users.push(newUser);

        console.log("User registered successfully!");

        // Send response without password
        return res.status(201).json({
            message: "User registered successfully!",
            user: {
                id: newUser.id,
                email: newUser.email
            }
        });

    } catch (error) {

        console.error("Registration error:", error.message);

        return res.status(500).json({
            message: "Registration error."
        });
    }
});



app.post("/api/login", async (req, res) => {

    try {

        // Get email and password
        const { email, password } = req.body || {};

        // Check missing fields
        if (
            typeof email !== "string" ||
            typeof password !== "string" ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        // Find user by email
        const normalizedEmail = email.trim().toLowerCase();

        const user = users.find(
            user => user.email === normalizedEmail
        );

        // Check if user exists
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        // Check password
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { sub: String(user.id) },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        console.log("User logged in successfully!");

        // Send token and user information
        return res.status(200).json({
            message: "Login successful!",
            token: token,
            tokenType: "Bearer",
            expiresIn: "1h",
            user: {
                id: user.id,
                email: user.email
            }
        });

    } catch (error) {

        console.error("Login error:", error.message);

        return res.status(500).json({
            message: "Login error."
        });
    }
});



function authenticateToken(req, res, next) {

    // Get authorization header
    const authHeader = req.headers.authorization;

    // Extract Bearer token
    const token =
        authHeader && authHeader.startsWith("Bearer ")
            ? authHeader.slice(7)
            : null;

    // Check if token exists
    if (!token) {
        return res.status(401).json({
            message: "Access denied. Token required."
        });
    }

    try {

        // Verify JWT token
        const decoded = jwt.verify(token, JWT_SECRET);

        // Find authenticated user
        const user = users.find(
            user => user.id === Number(decoded.sub)
        );

        if (!user) {
            return res.status(401).json({
                message: "User not found."
            });
        }

        // Attach user to request
        req.user = user;

        // Continue to next function
        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
}



app.get(
    "/api/profile",
    authenticateToken,
    (req, res) => {

        console.log("User profile accessed successfully!");

        return res.status(200).json({
            message: "Profile retrieved successfully!",
            user: {
                id: req.user.id,
                email: req.user.email
            }
        });
    }
);



app.use((req, res) => {

    res.status(404).json({
        message: "Route not found."
    });

});


app.listen(PORT, () => {

    console.log(
        `Server is running on http://localhost:${PORT}`
    );

});
