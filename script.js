var quest = [

    {question: "Naruto is ___ ?" ,
    pick: ["The number one hyperactive, knuckle headed ninja" ,
     "A side character",
     "In love with TenTen"] ,
    answer: 1
    },

    {question: "How many jutsu did Kakashi copy ?" ,
    pick: ["1000" ,
     "500",
     "100" ],
    answer: 1
    },

    {question: "What did Itachi use to defeat kabuto" ,
    pick: ["Izanagi" ,
     "Tsukiyomi",
     "Izanami"] ,
    answer: 3,
    }


]

var begin = document.querySelector(".start");
var quizContent = document.querySelector(".quiz-content");
var time = document.querySelector(".timer");
var questionsEl = document.querySelector(".questions");
var questionText = document.querySelector("#question");
var questionNum =document.querySelector("#num");


var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");

var mcs = document.querySelector(".mc");

var index = 0;
var timer = 60;
var right = 0;
var score = 0;

begin.addEventListener("click", startQuiz);

function startQuiz() {
    
    begin.style.display = "none";

    var gameTimer = setInterval(() => {
        timer--;
        time.textContent = timer;

        if (timer <= 0) {
            clearInterval(gameTimer);
            alert("Time is up")
        }
    }, 1000);
    quiz()
}

function quiz(){
    
    questionNum.textContent = index + 1 + ".";
    questionText.textContent = quest[index].question;
    choice1.textContent = quest[index].pick[0];
    choice2.textContent = quest[index].pick[1];
    choice3.textContent = quest[index].pick[2];

}

function checkAnswer () {

    if (quest[index].answer === quest[index].pick[answer]) {

        right++;

    } else {
        
        timer -= 5;
        timeLeft.textContent = timer;

    }

    index++;

    if (index < quest.length) {
        quiz();
    } else {
        wellDone();
    }
}
