const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Tech Modern Language", correct: false },
      { text: "Hyperlink Text Management Language", correct: false },
      { text: "Home Tool Markup Language", correct: false }
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false }
    ]
  },
  {
    question: "Which JavaScript method is used to select an element by ID?",
    answers: [
      { text: "querySelectorAll()", correct: false },
      { text: "getElementById()", correct: true },
      { text: "getElementsByClass()", correct: false },
      { text: "selectElement()", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "Netscape", correct: true },
      { text: "Apple", correct: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Syntax", correct: false },
      { text: "Colorful Style Sheets", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    answerDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;

    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML ="";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if(answerDisabled) return;

    answerDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach((button) => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if(button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if(currentQuestionIndex <quizQuestions.length) {
            showQuestion();
        }
        else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    if(percentage === 100) {
        resultMessage.textContent = "Perfect! You're a genius!";
    } else if(percentage >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!";
    } else if(percentage >= 60) {
        resultMessage.textContent = "Good effort! Keep learning!";
    }else if(percentage >= 40) {
        resultMessage.textContent = "Not bad! Try again to improve!";
    } else {
        resultMessage.textContent = "Keep studying! You'll get better!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");

    startQuiz();
};