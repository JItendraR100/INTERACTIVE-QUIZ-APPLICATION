const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer:1
    },  
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
        answer:0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer:3
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "95°C", "100°C", "105°C"],
        answer:2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("option1").textContent = currentQuestion.options[0];
    document.getElementById("option2").textContent = currentQuestion.options[1];
    document.getElementById("option3").textContent = currentQuestion.options[2];
    document.getElementById("option4").textContent = currentQuestion.options[3];
    document.getElementById("next-btn").style.display = "none";  // Hide Next button initially
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
    document.getElementById("next-btn").style.display = "inline-block";  // Show Next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    loadQuestion();
}

// Load the first question
loadQuestion();
