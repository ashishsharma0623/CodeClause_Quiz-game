const quizDB = [
    {
        question: "Q1: What is the full form of BGMI?",
        a: "Battle Ground Machine India",
        b: "Battle Gaurd Machine India",
        c: "Battle Ground Mobile India",
        d: "Battling Ground Mobile India",
        ans: "ans3"
    },
    {
        question: "Q2: Which weapon uses 5.56 Ammo?",
        a: "UMP45",
        b: "AKM,M762",
        c: "Vector,Uzi",
        d: "M416,SCARL",
        ans: "ans4"
    },
    {
        question: "Q3: Which one is the Drop Weapon?",
        a: "M24",
        b: "AWM",
        c: "Crossbow",
        d: "DP28",
        ans: "ans2"
    },
    {
        question: "Q4: Which is the Highest Tier of this Game?",
        a: "ACE",
        b: "CONQUEROR",
        c: "ACE:Dominator",
        d: "CROWN",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount]

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectALL = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked =false );
}

submit.addEventListener('click', () => {
    const checkedAnswer  = getCheckAnswer();

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
        
    };

    questionCount++;

    deselectALL();
    
    if (questionCount < quizDB.length) {
        loadQuestion();
        
    } else {
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length}</h3><h3/>
        <button class="btn" onclick="location.reload()">PLAY AGAIN! ✌</button>
        `;

        showScore.classList.remove('scoreArea');
    } 
       
    



});