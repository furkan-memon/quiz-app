let quiz = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Au",
        b: "Ag",
        c: "Pb",
        d: "Fe",
        correct: "a"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Mark Twain",
        b: "Charles Dickens",
        c: "William Shakespeare",
        d: "Jane Austen",
        correct: "c"
    },
    {
        question: "What is the smallest prime number?",
        a: "1",
        b: "2",
        c: "3",
        d: "5",
        correct: "b"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Quartz",
        correct: "c"
    },
    {
        question: "What is the main ingredient in guacamole?",
        a: "Tomato",
        b: "Avocado",
        c: "Onion",
        d: "Pepper",
        correct: "b"
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Great White Shark",
        d: "Giraffe",
        correct: "b"
    },
    {
        question: "What is the capital city of Japan?",
        a: "Seoul",
        b: "Beijing",
        c: "Tokyo",
        d: "Bangkok",
        correct: "c"
    },
    {
        question: "What is the boiling point of water?",
        a: "90°C",
        b: "100°C",
        c: "110°C",
        d: "120°C",
        correct: "b"
    }
];
let currentQuiz = 0;
let score = 0;
let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");
let nextBtn = document.getElementById("next-btn");
let resultEl = document.getElementById("result");
let scoreEl = document.getElementById("score");
loadQuiz();
