const questionEle = document.getElementById('question');
const answerBtns = document.getElementById('answer-buttons');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const resultShow = document.getElementById('result')


const questions = [
  {
    question: "What is HTML?",
    answers: [
      { text: "Programming Language", correct: false },
      { text: "Markup Language", correct: true },
      { text: "Database", correct: false },
      { text: "Operating System", correct: false }
    ]
  },
  {
    question: "What is CSS used for?",
    answers: [
      { text: "Styling", correct: true },
      { text: "Logic", correct: false },
      { text: "Database", correct: false },
      { text: "Backend", correct: false }
    ]
  },
  {
    question: "What does JS stand for?",
    answers: [
      { text: "Java Source", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Java System", correct: false },
      { text: "Just Script", correct: false }
    ]
  },
  {
    question: "Which tag is used for a hyperlink in HTML?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false }
    ]
  },
  {
    question: "Which property is used to change text color in CSS?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "background-color", correct: false }
    ]
  },
  {
    question: "Which method is used to select an element in JavaScript?",
    answers: [
      { text: "getElementById()", correct: true },
      { text: "selectElement()", correct: false },
      { text: "query()", correct: false },
      { text: "findElement()", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "**", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used for images?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false }
    ]
  },
  {
    question: "Which CSS property controls the size of text?",
    answers: [
      { text: "text-size", correct: false },
      { text: "font-size", correct: true },
      { text: "size", correct: false },
      { text: "text-style", correct: false }
    ]
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "int", correct: false },
      { text: "string", correct: false },
      { text: "define", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

// start button event
startBtn.addEventListener("click" , () => {
    startQuiz();
});

// next button event
nextBtn.addEventListener("click" , ()=> {
    if(nextBtn.innerText === "play Again") {
        startQuiz();  //restart quiz
        return;
    }
    
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }

});

// start quizz -> reset ecerything
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;  //reset score
    startBtn.style.display = "none";  // hide start button
    resultShow.innerText = "";
    nextBtn.innerText = "Next";  // reset button
    showQuestion();
}

// show questions and answers
function  showQuestion() {
    resetQuestion() //

    let currentQuestion = questions[currentQuestionIndex];
    questionEle.innerText = currentQuestion.question;

    // create dinamic buttons for answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = answer.text;
        button.addEventListener("click" ,() =>{
            selectAnswer(answer , button)
        });
        answerBtns.appendChild(button);
    });
    
}

// select correct answer
function selectAnswer(answer , button) {
    const allBtns = answerBtns.children;

    for(let btn of allBtns) {
        btn.disabled = true;
    }

    if(answer.correct) {
        score++;
        button.style.backgroundColor = "green";
    }
    else {
        button.style.backgroundColor = "red";
    }
    nextBtn.style.display = "block"
}

function resetQuestion() {
    nextBtn.style.display = "none";
    answerBtns.innerHTML = ""; //remove all btns
}

function showResult() {
    resetQuestion() 
    questionEle.innerText = "Quiz completed!"
    resultShow.innerText = `you scored ${score} out of ${questions.length}.`;
    nextBtn.innerText = "play Again";
    nextBtn.style.display = "block";
}

// initially
startBtn.style.display = "block";