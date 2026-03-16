
const questions = [
        {question: "1. Inside which HTML element do you put the JavaScript code?",
         answers : [
            {text: "<js>", correct: false},
            {text: "<scripting>", correct: false},
            {text: "<script>", correct: true},
            {text: "<javascript>", correct: false},
         ]   
        },

        {question: "2. Which is the correct syntax for referring to an external script named \"app.js\"? ",
         answers : [
            {text: "A) <script name=\"app.js\">", correct: false},
            {text: "B)<script href=\"app.js\">", correct: false},
            {text: "C) <script src=\"app.js\">", correct: true},
            {text: "D) <script ref=\"app.js\">", correct: false},
         ]   
        },

        {question: "3. How do you write \"Hello World\" in an alert box?",
         answers : [
            {text: "A) alert(\"Hello World\")", correct: true},
            {text: "B) msgBox(\"Hello World\")", correct: false},
            {text: "C) alertBox(\"Hello World\")", correct: false},
            {text: "D) console.log(\"Hello World\")", correct: false},
         ]   
        },

        {question: "4. How do you declare a variable in JavaScript that cannot be reassigned? ",
         answers : [
            {text: "A) var", correct: false},
            {text: "B) let", correct: false},
            {text: "C) const", correct: true},
            {text: "D) static", correct: false},
         ]   
        },

         {question: "5. What will be the result of the following expression: 5 + \"10\"",
         answers : [
            {text: "A) 15", correct: false},
            {text: "B) \"510\"", correct: true},
            {text: "C) \"15\"", correct: false},
            {text: "D) Error", correct: false},
         ]   
        }

    ]

let currentQuestion = 0;    
let points = 0;
let answered = false;

function starting(){
    const start_button = document.getElementById("start_button");
    const quizz_container = document.getElementById("quizz_container");

    start_button.style.display = "none";
    quizz_container.style.display = "inline";

    loadQuestion();

}


function loadQuestion(){
    answered = false;
    let list = document.querySelectorAll(".choice");
    let question = document.getElementById("question");
    question.textContent = questions[currentQuestion].question

    list.forEach( (a, index) => {
        a.textContent = questions[currentQuestion].answers[index].text
        a.style.color = "black";
        a.style.backgroundColor = "transparent";
        a.style.border = "solid";
    })

}

function checkanswers(i){
    if(answered) return;
    answered = true;
    let list = document.querySelectorAll(".choice");

   
        if( questions[currentQuestion].answers[i].correct){
        list[i].style.color = "white";
        list[i].style.backgroundColor = "green";
        list[i].style.border="none";
        points+=1;
    }
        else{
            list[i].style.color = "white";
        list[i].style.backgroundColor = "red";
        list[i].style.border="none";
        list.forEach((a,index)=>{

        if(questions[currentQuestion].answers[index].correct){

            a.style.color = "white";
            a.style.backgroundColor = "green";
            a.style.border = "none";

        }

    });

        }
}

function next(){

    if(currentQuestion < questions.length-1){
        currentQuestion++;
        loadQuestion();
    }

    else{
        alert(`Your score is ${points}/5`);
    }
}

document.querySelectorAll(".choice").forEach((answer,index) =>{
    answer.addEventListener("click",event=>{
        checkanswers(index)
    })
})
