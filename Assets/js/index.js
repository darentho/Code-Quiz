

// variable for timer   (global) 
var time = document.querySelector(".time-counter");//bound to the 
var score = document.querySelector("#score");// bound to the final score section
var secondsLeft = 75;

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



