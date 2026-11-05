const express = require("express");
const path = require("path");
const { randomUUID } = require("crypto");

// Import questions module
const questions = require("./data/questions");

// Create Express application
const app = express();

// Define port
const PORT = 5000;

// Read JSON data
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));


// Store all active games in memory
const games = new Map();



function shuffle(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

    }

    return shuffled;
}


function getPublicQuestion(game) {

    const question = questions.find(
        item => item.id === game.questionIds[game.currentIndex]
    );

    // Never send the correct answer to the frontend
    return {
        id: question.id,
        question: question.question,
        options: question.options,
        questionNumber: game.currentIndex + 1,
        totalQuestions: game.questionIds.length
    };
}



app.post("/api/quiz/start", (req, res) => {

    try {

        // Generate unique game ID
        const gameId = randomUUID();

        // Randomize questions
        const questionIds = shuffle(
            questions.map(question => question.id)
        );

        // Create game
        const game = {
            gameId: gameId,
            questionIds: questionIds,
            currentIndex: 0,
            score: 0,
            finished: false
        };

        // Store game
        games.set(gameId, game);

        console.log("New quiz started!");

        // Send first question
        return res.status(201).json({
            message: "Quiz started successfully!",
            gameId: gameId,
            score: game.score,
            question: getPublicQuestion(game)
        });

    } catch (error) {

        console.error("Start quiz error:", error.message);

        return res.status(500).json({
            message: "Could not start quiz."
        });
    }
});



app.get("/api/quiz/:gameId/question", (req, res) => {

    const game = games.get(req.params.gameId);

    // Check game
    if (!game) {
        return res.status(404).json({
            message: "Game not found."
        });
    }

    // Check if quiz is finished
    if (game.finished) {
        return res.status(200).json({
            finished: true,
            score: game.score,
            totalQuestions: game.questionIds.length
        });
    }

    // Return current question without correct answer
    return res.status(200).json({
        question: getPublicQuestion(game)
    });
});


app.post("/api/quiz/answer", (req, res) => {

    try {

        // Get data from request
        const { gameId, questionId, answer } = req.body || {};

        // Validate request
        if (
            typeof gameId !== "string" ||
            !Number.isInteger(questionId) ||
            typeof answer !== "string"
        ) {
            return res.status(400).json({
                message: "Game ID, question ID and answer are required."
            });
        }

        // Find game
        const game = games.get(gameId);

        if (!game) {
            return res.status(404).json({
                message: "Game not found."
            });
        }

        // Check if game is finished
        if (game.finished) {
            return res.status(409).json({
                message: "This quiz is already finished."
            });
        }

        // Get current question
        const currentQuestionId =
            game.questionIds[game.currentIndex];

        if (questionId !== currentQuestionId) {
            return res.status(409).json({
                message: "This is not the current question."
            });
        }

        const currentQuestion = questions.find(
            question => question.id === currentQuestionId
        );

        // Check whether answer is one of the options
        const selectedAnswer = answer.trim();

        if (!currentQuestion.options.includes(selectedAnswer)) {
            return res.status(400).json({
                message: "Invalid answer option."
            });
        }

        // Check answer
        const isCorrect =
            selectedAnswer === currentQuestion.correctAnswer;

        // Update score
        if (isCorrect) {
            game.score++;
        }

        // Move to next question
        game.currentIndex++;

        // Check if quiz is finished
        const isFinished =
            game.currentIndex >= game.questionIds.length;

        game.finished = isFinished;

        console.log(
            isCorrect ? "Correct answer!" : "Incorrect answer!"
        );

        // Send feedback
        return res.status(200).json({
            correct: isCorrect,
            correctAnswer: currentQuestion.correctAnswer,
            message: isCorrect
                ? "Correct! Well done!"
                : "Incorrect! Try again next time!",
            score: game.score,
            questionNumber: game.currentIndex,
            totalQuestions: game.questionIds.length,
            finished: game.finished,
            finalScore: game.finished
                ? game.score
                : null
        });

    } catch (error) {

        console.error("Answer error:", error.message);

        return res.status(500).json({
            message: "Could not check answer."
        });
    }
});


app.use("/api", (req, res) => {

    return res.status(404).json({
        message: "API endpoint not found."
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
        `Quiz Game Server running on http://localhost:${PORT}`
    );

});
