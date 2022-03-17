var quest = [

    {question: "Naruto is ___ ?" ,
    pick: ["The number one hyperactive, knuckle headed ninja" ,
     "A side character",
     "In love with TenTen"] ,
    answer: "The number one hyperactive, knuckle headed ninja"
    },

    {question: "How many jutsu did Kakashi copy ?" ,
    pick: ["1000" ,
     "500",
     "100" ],
    answer: "1000"
    },

    {question: "What did Itachi use to defeat kabuto" ,
    pick: ["Izanagi" ,
     "Tsukiyomi",
     "Izanami"] ,
    answer:  "Izanami"
    }


]

var begin = document.querySelector(".start");
var quizContent = document.querySelector(".quiz-content");
var time = document.querySelector(".timer");
var questionsEl = document.querySelector(".questions");
var questionText = document.querySelector("#question");
var questionNum =document.querySelector("#num");
var results = document.querySelector('.results')


var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var highscore = document.querySelector('#results')

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

    choice1.addEventListener('click', checkAnswer)
    choice2.addEventListener('click', checkAnswer)
    choice3.addEventListener('click', checkAnswer)
    

}

function checkAnswer() {
if(this.textContent === quest[index].answer) {
    timer += 5; // if the answer is correct increase the time by 5 seconds
} else {
    timer -= 5; // if not decrease the time by 5 seconds
} if (timer <= 0) endQuiz(); // if the timer is less than or equal to 0 end the quiz
    index++; // increment the questions
if(index >= quest.length) {
    endQuiz();
} else{
    quiz();
}
}

function endQuiz(){
    // asking for username so that the score can be saved
    quizContent.style.display = "none"
    results.style.display = "flex"

    let userName = prompt('Please enter your username')

    localStorage.setItem('highscore', JSON.stringify({userName: userName, score: timer}));

    highscore.textContent = localStorage.getItem('highscore', JSON.stringify({userName: userName, score: timer}))

    

}
