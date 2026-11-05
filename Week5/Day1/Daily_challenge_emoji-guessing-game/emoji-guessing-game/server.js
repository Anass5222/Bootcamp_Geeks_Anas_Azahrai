const express = require("express");
const path = require("path");
const { randomUUID } = require("crypto");

// Import emojis module
const emojis = require("./data/emojis");

// Create Express application
const app = express();

// Define port
const PORT = 5000;

// Middleware to read JSON
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));



// Store players in memory
const players = new Map();

// Store active questions for each player
const activeRounds = new Map();



function shuffle(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}



app.post("/api/players", (req, res) => {

    const { name } = req.body || {};

    // Validate player name
    if (
        typeof name !== "string" ||
        !name.trim() ||
        name.trim().length > 20
    ) {
        return res.status(400).json({
            message: "Name is required and must contain at most 20 characters."
        });
    }

    // Create player
    const player = {
        id: randomUUID(),
        name: name.trim(),
        score: 0,
        roundsPlayed: 0
    };

    // Save player
    players.set(player.id, player);

    console.log(`Player ${player.name} joined the game!`);

    return res.status(201).json({
        message: "Player created successfully!",
        player: {
            id: player.id,
            name: player.name,
            score: player.score,
            roundsPlayed: player.roundsPlayed
        }
    });
});



app.get("/api/players/:id", (req, res) => {

    const player = players.get(req.params.id);

    if (!player) {
        return res.status(404).json({
            message: "Player not found."
        });
    }

    return res.status(200).json({
        player: player
    });
});



app.get("/api/round/:playerId", (req, res) => {

    const playerId = req.params.playerId;

    // Check player
    const player = players.get(playerId);

    if (!player) {
        return res.status(404).json({
            message: "Player not found."
        });
    }

    // Select random emoji
    const correctIndex = Math.floor(Math.random() * emojis.length);

    const correctEmoji = emojis[correctIndex];

    // Select three incorrect options
    const incorrectOptions = shuffle(
        emojis.filter(item => item.name !== correctEmoji.name)
    ).slice(0, 3);

    // Combine correct and incorrect answers
    const options = shuffle([
        correctEmoji,
        ...incorrectOptions
    ]);

    // Generate unique round ID
    const roundId = randomUUID();

    // Store correct answer on server
    activeRounds.set(playerId, {
        roundId: roundId,
        correctName: correctEmoji.name
    });

    console.log(`New round generated for ${player.name}`);

    // Send question without revealing correct answer
    return res.status(200).json({
        roundId: roundId,
        emoji: correctEmoji.emoji,
        options: options.map(item => item.name)
    });
});



app.post("/api/guess", (req, res) => {

    const { playerId, roundId, answer } = req.body || {};

    // Validate request
    if (
        typeof playerId !== "string" ||
        typeof roundId !== "string" ||
        typeof answer !== "string"
    ) {
        return res.status(400).json({
            message: "Player ID, round ID and answer are required."
        });
    }

    // Find player
    const player = players.get(playerId);

    if (!player) {
        return res.status(404).json({
            message: "Player not found."
        });
    }

    // Get active round
    const activeRound = activeRounds.get(playerId);

    if (!activeRound || activeRound.roundId !== roundId) {
        return res.status(409).json({
            message: "This round is no longer active. Request a new round."
        });
    }

    // Check answer
    const isCorrect =
        answer.trim().toLowerCase() ===
        activeRound.correctName.toLowerCase();

    // Update rounds played
    player.roundsPlayed++;

    // Update score if answer is correct
    if (isCorrect) {
        player.score++;
    }

    // Remove completed round
    activeRounds.delete(playerId);

    console.log(
        `${player.name}: ${isCorrect ? "Correct answer!" : "Wrong answer!"}`
    );

    // Send feedback
    return res.status(200).json({
        correct: isCorrect,
        correctAnswer: activeRound.correctName,
        message: isCorrect
            ? "Correct! Well done!"
            : "Incorrect! Better luck next time!",
        score: player.score,
        roundsPlayed: player.roundsPlayed
    });
});



app.get("/api/leaderboard", (req, res) => {

    // Convert Map to array and sort players
    const leaderboard = Array.from(players.values())
        .sort((a, b) => {
            return (
                b.score - a.score ||
                a.roundsPlayed - b.roundsPlayed
            );
        })
        .slice(0, 10)
        .map((player, index) => ({
            rank: index + 1,
            name: player.name,
            score: player.score,
            roundsPlayed: player.roundsPlayed
        }));

    return res.status(200).json({
        leaderboard: leaderboard
    });
});



app.use("/api", (req, res) => {

    return res.status(404).json({
        message: "API route not found."
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

    console.log(
        `Emoji Game Server running on http://localhost:${PORT}`
    );

});
