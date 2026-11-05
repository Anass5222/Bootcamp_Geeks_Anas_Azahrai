
const startSection = document.getElementById("startSection");
const gameSection = document.getElementById("gameSection");

const startForm = document.getElementById("startForm");
const playerNameInput = document.getElementById("playerName");
const startMessage = document.getElementById("startMessage");

const displayName = document.getElementById("displayName");
const scoreValue = document.getElementById("scoreValue");

const emojiDisplay = document.getElementById("emojiDisplay");
const guessForm = document.getElementById("guessForm");
const optionsContainer = document.getElementById("optionsContainer");

const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

const leaderboardList = document.getElementById("leaderboardList");
const changePlayerButton = document.getElementById("changePlayer");



let currentPlayer = null;
let currentRound = null;

const STORAGE_KEY = "emojiGamePlayerId";


async function apiRequest(url, options = {}) {

    const headers = {
        ...options.headers
    };

    if (options.body) {
        headers["Content-Type"] = "application/json";
    }

    const response = await fetch(url, {
        ...options,
        headers
    });

    const data = await response.json().catch(() => ({
        message: "Invalid server response."
    }));

    if (!response.ok) {
        throw new Error(data.message || "Request failed.");
    }

    return data;
}


startForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = playerNameInput.value.trim();

    if (!name) {
        startMessage.textContent = "Please enter your name.";
        return;
    }

    try {

        const data = await apiRequest("/api/players", {
            method: "POST",
            body: JSON.stringify({
                name: name
            })
        });

        currentPlayer = data.player;

        // Save player ID in browser session
        sessionStorage.setItem(
            STORAGE_KEY,
            currentPlayer.id
        );

        await showGame();

    } catch (error) {

        startMessage.textContent = error.message;
    }
});



async function showGame() {

    startSection.hidden = true;
    gameSection.hidden = false;

    displayName.textContent = currentPlayer.name;
    scoreValue.textContent = currentPlayer.score;

    await loadLeaderboard();
    await loadNewRound();
}


async function loadNewRound() {

    try {

        const data = await apiRequest(
            `/api/round/${encodeURIComponent(currentPlayer.id)}`
        );

        currentRound = data;

        // Display emoji
        emojiDisplay.textContent = data.emoji;

        // Clear previous options
        optionsContainer.replaceChildren();

        // Generate radio buttons
        data.options.forEach((option, index) => {

            const label = document.createElement("label");
            label.className = "option-card";

            const input = document.createElement("input");

            input.type = "radio";
            input.name = "answer";
            input.value = option;
            input.id = `option-${index}`;

            const span = document.createElement("span");
            span.textContent = option;

            label.appendChild(input);
            label.appendChild(span);

            optionsContainer.appendChild(label);

        });

        // Reset form
        guessForm.reset();

        submitGuess.disabled = false;
        nextButton.hidden = true;

        feedback.textContent = "Choose your answer!";
        feedback.className = "feedback";

    } catch (error) {

        feedback.textContent = error.message;
        feedback.className = "feedback error";
    }
}



guessForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    // Get selected answer
    const selectedOption = optionsContainer.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selectedOption) {

        feedback.textContent = "Please select an answer!";
        feedback.className = "feedback error";

        return;
    }

    submitGuess.disabled = true;

    try {

        // Send answer to Express API
        const result = await apiRequest("/api/guess", {

            method: "POST",

            body: JSON.stringify({
                playerId: currentPlayer.id,
                roundId: currentRound.roundId,
                answer: selectedOption.value
            })

        });

        // Update score
        currentPlayer.score = result.score;
        currentPlayer.roundsPlayed = result.roundsPlayed;

        scoreValue.textContent = result.score;

        // Show feedback
        if (result.correct) {

            feedback.textContent =
                `✅ Correct! The answer is ${result.correctAnswer}. +1 point!`;

            feedback.className = "feedback correct";

        } else {

            feedback.textContent =
                `❌ Incorrect! The correct answer was ${result.correctAnswer}.`;

            feedback.className = "feedback incorrect";
        }

        // Disable options after submission
        optionsContainer
            .querySelectorAll("input")
            .forEach(input => {
                input.disabled = true;
            });

        // Hide Submit and show Next button
        submitGuess.disabled = true;
        nextButton.hidden = false;

        // Refresh leaderboard
        await loadLeaderboard();

    } catch (error) {

        feedback.textContent = error.message;
        feedback.className = "feedback error";

        submitGuess.disabled = false;
    }
});



nextButton.addEventListener("click", async () => {

    await loadNewRound();

});



async function loadLeaderboard() {

    try {

        const data = await apiRequest("/api/leaderboard");

        // Clear leaderboard
        leaderboardList.replaceChildren();

        if (data.leaderboard.length === 0) {

            const li = document.createElement("li");
            li.textContent = "No players yet.";

            leaderboardList.appendChild(li);

            return;
        }

        // Display top 10 players
        data.leaderboard.forEach(player => {

            const li = document.createElement("li");

            li.textContent =
                `${player.name} — ${player.score} points`;

            leaderboardList.appendChild(li);

        });

    } catch (error) {

        leaderboardList.textContent = error.message;
    }
}



changePlayerButton.addEventListener("click", () => {

    sessionStorage.removeItem(STORAGE_KEY);

    currentPlayer = null;
    currentRound = null;

    gameSection.hidden = true;
    startSection.hidden = false;

    playerNameInput.value = "";
    startMessage.textContent = "";

});



async function initializeGame() {

    try {

        // Load leaderboard
        await loadLeaderboard();

        const savedPlayerId = sessionStorage.getItem(STORAGE_KEY);

        if (!savedPlayerId) {
            return;
        }

        // Check if saved player still exists
        const data = await apiRequest(
            `/api/players/${encodeURIComponent(savedPlayerId)}`
        );

        currentPlayer = data.player;

        await showGame();

    } catch (error) {

        // Player may no longer exist after server restart
        sessionStorage.removeItem(STORAGE_KEY);

        currentPlayer = null;

        startMessage.textContent =
            "Your previous game session has ended. Start a new game!";
    }
}



initializeGame();
