
// Array of quiz questions

const questions = [

    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },

    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "Python",
            "Java"
        ],
        correctAnswer: "CSS"
    },

    {
        id: 3,
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "int",
            "string",
            "let",
            "define"
        ],
        correctAnswer: "let"
    },

    {
        id: 4,
        question: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Advanced Programming Internet",
            "Application Process Integration",
            "Automated Program Information"
        ],
        correctAnswer: "Application Programming Interface"
    },

    {
        id: 5,
        question: "Which method is used to add an element to the end of an array?",
        options: [
            "pop()",
            "shift()",
            "push()",
            "slice()"
        ],
        correctAnswer: "push()"
    },

    {
        id: 6,
        question: "Which command initializes a Node.js project?",
        options: [
            "node start",
            "npm init",
            "npm install express",
            "node create"
        ],
        correctAnswer: "npm init"
    },

    {
        id: 7,
        question: "Which HTTP method is used to retrieve data?",
        options: [
            "POST",
            "DELETE",
            "PUT",
            "GET"
        ],
        correctAnswer: "GET"
    },

    {
        id: 8,
        question: "Which function converts JSON text into a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correctAnswer: "JSON.parse()"
    }

];

// Export questions module
module.exports = questions;
