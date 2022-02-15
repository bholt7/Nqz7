var begin = document.querySelector(".start");
var timerText = document.querySelector(".timer");
var scoreSection = document.querySelector(".score");
var scoreTracker = document.querySelector(".score-tracker");
var img = document.querySelector(".naruto-image")
var questionEl = document.querySelector(".question-container")
var answers = document.querySelector(".answers")



var timer = 60;
var score = 0;

var questions = [
    {
        question: "How many Jutsu did Kakashi copy ?",
        chocies: [
            "a)100", 
            "b)500", 
            "c)1000"],
        answer: 2,


    },
    {
        question: "Why did Sasuke leave the Hidden Leaf ?",
        chocies: [
            "a)For power",
            "b)For revenge", 
            "c)all the above"],
        answer: 2,
    },
    {
        question: "What jutsu did Itachi use on Kabuto ?",
        chocies: [
            "a)Izanami", 
            "b)Izanagi", 
            "c)Tsukiyomi"],
        answer: 0,
    },
];

var questionIndex = 0;



begin.addEventListener("click", startQuiz);

function startQuiz () {

    begin.style.display = "none";
    img.style.display = "none";

    var questionIndex = 0;

    var gameTimer = setInterval(() => {
        timerText.textContent = timer;
        timer--;

        if(timer<=0) {
            clearInterval(gameTimer);
            alert("Time is Up");

            if(questionIndex < questions.length -1) {

            }
        }
    }, 1000);

    quizContent();
};

function quizContent() {
    questionEl.textContent = questions[questionIndex].question;


};





