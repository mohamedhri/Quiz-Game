
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

const a_txt = document.getElementById("r1");
const b_txt = document.getElementById("r2");
const c_txt = document.getElementById("r3");
const d_txt = document.getElementById("r4");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;




