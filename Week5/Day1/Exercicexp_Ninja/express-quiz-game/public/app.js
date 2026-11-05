

const startSection = document.getElementById("startSection");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");

const startButton = document.getElementById("startButton");
const startError = document.getElementById("startError");

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");

const answerForm = document.getElementById("answerForm");
const submitButton = document.getElementById("submitButton");

const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");

const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

const finalMessage = document.getElementById("finalMessage");
const finalScore = document.getElementById("finalScore");

const restartButton = document.getElementById("restartButton");



let gameId = null;
let currentQuestion = null;
let score = 0;
let totalQuestions = 0;



async function apiRequest(url, options = {}) {

    const response = await fetch(url, options);

    const data = await response.json().catch(() => ({
        message: "Invalid server response."
    }));

    if (!response.ok) {
        throw new Error(data.message || "Request failed.");
    }

    return data;
}



async function startQuiz() {

    try {

        startButton.disabled = true;
        startError.textContent = "";

        const data = await apiRequest("/api/quiz/start", {
            method: "POST"
        });

        // Save game information
        gameId = data.gameId;
        score = data.score;
        totalQuestions = data.question.totalQuestions;

        // Display quiz
        startSection.hidden = true;
        resultSection.hidden = true;
        quizSection.hidden = false;

        scoreElement.textContent = score;

        // Display first question
        displayQuestion(data.question);

    } catch (error) {

        startError.textContent = error.message;

    } finally {

        startButton.disabled = false;
    }
}



function displayQuestion(question) {

    currentQuestion = question;

    // Display question
    questionText.textContent = question.question;

    // Display progress
    progressElement.textContent =
        `${question.questionNumber} / ${question.totalQuestions}`;

    progressBar.style.width =
        `${(question.questionNumber / question.totalQuestions) * 100}%`;

    // Clear previous options
    optionsContainer.replaceChildren();

    // Create options dynamically
    question.options.forEach((option, index) => {

        const label = document.createElement("label");
        label.className = "option";

        const input = document.createElement("input");

        input.type = "radio";
        input.name = "answer";
        input.value = option;
        input.required = true;

        const span = document.createElement("span");

        span.textContent = option;

        label.appendChild(input);
        label.appendChild(span);

        optionsContainer.appendChild(label);

    });

    // Reset feedback and controls
    answerForm.reset();

    feedback.textContent = "";
    feedback.className = "";

    submitButton.disabled = false;
    nextButton.hidden = true;
}



answerForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    // Get selected answer
    const selectedOption = optionsContainer.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selectedOption) {

        feedback.textContent = "Please select an answer.";
        feedback.className = "error";

        return;
    }

    // Disable button to prevent multiple submissions
    submitButton.disabled = true;

    try {

        // Send answer to Express API using Fetch
        const result = await apiRequest("/api/quiz/answer", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                gameId: gameId,
                questionId: currentQuestion.id,
                answer: selectedOption.value
            })

        });

        // Update score
        score = result.score;

        scoreElement.textContent = score;

        // Show feedback
        feedback.textContent =
            `${result.message} Correct answer: ${result.correctAnswer}`;

        feedback.className = result.correct
            ? "correct"
            : "incorrect";

        // Disable all answers after submission
        optionsContainer
            .querySelectorAll("input")
            .forEach(input => {
                input.disabled = true;
            });

        // Check if quiz is finished
        if (result.finished) {

            quizSection.hidden = true;
            resultSection.hidden = false;

            finalScore.textContent =
                `${result.finalScore} / ${result.totalQuestions}`;

            finalMessage.textContent =
                `You answered ${result.finalScore} out of ${result.totalQuestions} questions correctly!`;

        } else {

            // Show next button
            nextButton.hidden = false;

        }

    } catch (error) {

        feedback.textContent = error.message;
        feedback.className = "error";

        submitButton.disabled = false;
    }
});


nextButton.addEventListener("click", async () => {

    try {

        nextButton.disabled = true;

        const data = await apiRequest(
            `/api/quiz/${encodeURIComponent(gameId)}/question`
        );

        if (data.finished) {
            return;
        }

        displayQuestion(data.question);

    } catch (error) {

        feedback.textContent = error.message;
        feedback.className = "error";

    } finally {

        nextButton.disabled = false;
    }
});



restartButton.addEventListener("click", () => {

    score = 0;
    gameId = null;
    currentQuestion = null;

    resultSection.hidden = true;
    quizSection.hidden = true;
    startSection.hidden = false;

    scoreElement.textContent = "0";
    progressBar.style.width = "0%";

});



startButton.addEventListener("click", startQuiz);



quizSection.hidden = true;
resultSection.hidden = true;
startSection.hidden = false;
