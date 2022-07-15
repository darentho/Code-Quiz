

// variable for timer   (global) 
var time = document.querySelector(".time-counter");//bound to the 
var score = document.querySelector("#score");// bound to the final score section
var secondsLeft = 75;//will be bound to the setInterval function <time.textContent = `Time:${secondsLeft}s`;>

//variable for buttons (global )
const start = document.querySelector("#begin");

// variable for start
const codersIntro = document.querySelector("#challenge-begins");

//load element variable
var questionsEl = document.querySelector(".all-question");

// right-wrong variable. 
let questionEl = document.querySelector("#question");
const correctWrong = document.querySelector("#right-wrong");
let questionCount = 0;


// final score variable. 
const finalEl = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");

// highScore variable. 
const highscoresEl = document.querySelector("#high-scores");
let scoreListEl = document.querySelector(".score-list");
let scoreList = [];

// calls out the answer button variable. 
const ansBtn = document.querySelectorAll("button.answer-btn")

// variable for submit, clear, view and go back. 
let submitScrBtn = document.querySelector("#submit-score");
let clearScrBtn = document.querySelector("#clearScores");
let viewScrBtn = document.querySelector("#view-scores");
let goBackBtn = document.querySelector("#goBack");


// variable for answer call. 
const ans1Btn = document.querySelector("#answer-1");
const ans2Btn = document.querySelector("#answer-2");
const ans3Btn = document.querySelector("#answer-3");
const ans4Btn = document.querySelector("#answer-4");



// array for the five questions. 
const questions = [
    {
        question: "Primitive data types do not include?:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "What do the if/else statments need to work? _______.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        question: "In Javascript, Arrays store: ______.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];

//setting up the timer to start. 
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            score.textContent = secondsLeft;
        }
    }, 1000);
}