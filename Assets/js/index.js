

// variable for timer   (global) 
var time = document.querySelector(".time-counter");//bound to the setInterval Function. <time.textContent = `Time:${secondsLeft}s`;>
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
        secondsLeft--; //will decrease by 1 each 1000mlls
        time.textContent = `Time:${secondsLeft}s`;//will use the seconds left starting from 75. 
        //if timer reaches 0 or if question count is through to its full-length then interval will clear. 
        //this is an either-or statement that will make the finalEl work to provide the All Done! statement. 
        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);// will clear the interval
            questionsEl.style.display = "none"; // will conceal the questionsEl element. 
            finalEl.style.display = "block"; //will display previously hidden element <final-score>
            score.textContent = secondsLeft; //will still display the timer that should be 0 if the condition is met. 
        }
    }, 1000);
}

// Begin the quiz function. 
function startQuiz() {
    codersIntro.style.display = "none"; //will conceal #challenge-begins. 
    questionsEl.style.display = "block";//will reveal the questions #all-questions
    questionCount = 0;//will set the counter for the questions. 

    setTime(); //it's calling the setTime function.
    setQuestion(questionCount);
}

// setting the SetQuestion function. 
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

// Check Answers Function-Begin Process
function checkAnswer(event) {
    event.preventDefault();

    //Created the wright or wrong element. 

    correctWrong.style.display = "block";
    let p = document.createElement("p");
    correctWrong.appendChild(p);

    //displays the element for x time. 

    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    }

    else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    // question cycle 
    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}
//function for adding the score 
function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

    // sorting the high scores
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });

    scoreListEl.innerHTML = "";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    // storing the score
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    // used Json to parse the string to an object
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // for when retrieved from local array. 
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}







//check start button listener to start the quiz.
start.addEventListener("click", startQuiz);

// check answer listener.
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});