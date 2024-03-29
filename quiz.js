
const quizData = [
 {
  question: "Quelle affirmation est vraie à propos de Java?",
  a: "Java est un langage de programmation dépendant de la séquence",
  b: "Java est un langage de programmation dépendant du code",
  c: "Java est un langage de programmation dépendant de la plate-forme",
  d: "Java est un langage de programmation indépendant de la plate-forme",
  correct: "d"
 },

 {
  question: "Quel composant est utilisé pour compiler, déboguer et exécuter les programmes Java?",
  a: "JRE",
  b: "JIT",
  c: "JDK",
  d: "Machine virtuelle Jva",
  correct: "c"
 },
 {
  question: "Laquelle des fonctionnalités suivantes n'est pas une fonctionnalité Java?",
  a: "Orienté objet",
  b: "Utilisation de pointeurs",
  c: "Portable",
  d: "Dynamique et Extensible",
  correct: "b"
 },
 {
  question: "Lequel de ces éléments ne peut pas être utilisé pour un nom de variable en Java?",
  a: "identifiant et mot-clé",
  b: "identifiant",
  c: "mot-clé",
  d: "aucun des éléments mentionnés",
  correct: "c"
 },
 {
  question: "Quelle est l'extension des fichiers de code Java?",
  a: ".js",
  b: ".txt",
  c: ".classe",
  d: ".java",
  correct: "d"
 }
];

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");
const ss= document.getElementById("sc")
const td=document.getElementById("timer-left")

const a_txt = document.getElementById("r1");
const b_txt = document.getElementById("r2");
const c_txt = document.getElementById("r3");
const d_txt = document.getElementById("r4");
const btnNext = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;
let timeLeft = 12; 


function deselectAnswers() {
    answerEl.forEach((answerEl) => {
     answerEl.checked = false;
    });
   }
 


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_txt.innerText = currentQuizData.a;
    b_txt.innerText = currentQuizData.b;
    c_txt.innerText = currentQuizData.c;
    d_txt.innerText = currentQuizData.d;
    quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
   }

loadQuiz();

    
/* /* 
function getSelected() {
    let answer;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            const selectedOption = answerEl.parentElement;
            const correctAnswer = quizData[currentQuiz].correct;
            if (answer === correctAnswer) {
                selectedOption.classList.add("correct");
                console.log(worked);
            } else {
                selectedOption.classList.add("incorrect");
                // Highlight the correct answer
                document.getElementById(correctAnswer).classList.add("correct");
            }
        }
    });
    return answer;
} */
function updateScore(){
        ss.textContent = score;
}
/* function updateTimer (){
    td.textContent = timeLeft;
}
 */
/* function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--; 
        updateTimer(); 

        if (timeLeft === 0) {
            clearInterval(timerInterval); 
            nextQuestion(); /
        }
    }, 1000); 
} */


function getSelected() {
    let answer;
    answerEl.forEach((answerEls) => {
     if (answerEls.checked) {
      answer = answerEls;
     }
    });
    return answer;
    
   }
   btnNext.addEventListener("mouseup", function () {
    let selectedAnswer = getSelected();

    if (selectedAnswer) {
        const correctAnswer = quizData[currentQuiz].correct;
        if (selectedAnswer.id === correctAnswer) {
            selectedAnswer.parentElement.classList.add("correct");
            score+=10;
            updateScore();
            
        } else {
            selectedAnswer.parentElement.classList.add("incorrect");
            document.getElementById(correctAnswer).parentElement.classList.add("correct");
        }
    }

    setTimeout(nextQuestion, 1000);
    

    
});


 

   

function nextQuestion() {

    answerEl.forEach(answerEl => {
        answerEl.parentElement.classList.remove("correct", "incorrect");
    });
    currentQuiz++

    /* if(answerEl == quizData[currentQuiz].correctAnswer){
        score +=10;
        ss.innerText= score;
    } */
   
    if (currentQuiz < quizData.length) {
     loadQuiz();
    } else {
        score1 = score/10;
      quiz.innerHTML = `<h2>Félicitation <br><br>Vous répondez à  ${score1}/${5} question correctly</h2>
       <button type="button" onclick="location.reload()" style="background-color: #111; font-color=white" >Restart</button>
       `;
     footerEl.style.display = "none";
    }
   } 


