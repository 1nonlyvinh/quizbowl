const submitButton = document.querySelector('.submit-container');
const header = document.querySelector('.title-container');
const score = document.querySelector('.score-container')
const question = document.querySelector('.question-container');
const input = document.querySelector('input-container');
const outputContainer = document.querySelector('.output-container');
const submitSwitch = document.getElementById('submit-switch');
const checkAnswer = document.getElementById('input-field');
let isFirstSubmission = true;

const questionArray = [
    { question:'whats 2+2?', answer: '4'},
    { question: 'whats the capital of NY?', answer: 'albany' },
];
index = 0; 

function displayNextQuestion() {
    if (index < questionArray.length) {
        document.getElementById("question-bar").textContent = questionArray[index].question;
    }
}

document.querySelector('#submit-switch button').addEventListener('click', () => {
    displayNextQuestion();
});

let currentQuestionIndex = 0;

function checkCorrectAnswer() {
    if(checkAnswer === 4) {
        console.log('hello');
        alert('correct!');
        index++;
    }
    else {
        alert('incorrect! try again.');
    }
};

checkCorrectAnswer();

