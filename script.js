var begin = document.querySelector(".start");
var timerText = document.querySelector(".timer");
var scoreSection = document.querySelector(".score");
var scoreTracker = document.querySelector(".score-tracker");
var img = document.querySelector(".naruto-image")

var timer = 20;
var score = 0;

var questions = [
    {
        question: "How many Jutsu did Kakashi copy ?",
        chocies: ["100", "500", "1000"],
        answer: 2,


    },
    {
        question: "Why did Sasuke leave the Hidden Leaf ?",
        chocies: ["For power","For revenge", "all the above"],
        answer: 2,
    },
    {
        question: "What jutsu did Itachi use on Kabuto ?",
        chocies: ["Izanami", "Izanagi", "Tsukiyomi"],
        answer: 0,
    },
];



begin.addEventListener("click", startQuiz);

function startQuiz () {

    begin.style.display = "none";
    img.style.display = "none";
}

