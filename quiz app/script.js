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

let btn = document.querySelector(".start-btn");
btn.addEventListener("click",function(){
    document.querySelector(".start-btn").style.display = "none";
    document.querySelector(".quiz-section").style.display = "block";
});
loadQuiz();

function loadQuiz() {
    let currentQuizData = quiz[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    optionsEl.innerHTML = `
        <button>${currentQuizData.a}</button>
        <button>${currentQuizData.b}</button>
        <button>${currentQuizData.c}</button>
        <button>${currentQuizData.d}</button>
    `;
    let optionButtons = optionsEl.querySelectorAll("button");
    optionButtons.forEach(button => {
        button.addEventListener("click", selectOption);
    });
}

function selectOption(e) {
    let selectedOption = e.target;
    let answer = selectedOption.innerText;
    if (answer == quiz[currentQuiz].correct) {
        score++;
        selectedOption.classList.add("correct");
    } else {
        selectedOption.classList.add("incorrect");
    }
    currentQuiz++;
    if (currentQuiz < quiz.length) {
       setTimeout(loadQuiz, 5000);
    } else {
        showResult();
    }

}
