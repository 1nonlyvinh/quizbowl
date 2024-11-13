const submitButton = document.querySelector('.submit-container');
const header = document.querySelector('.title-container');
const score = document.querySelector('.score-container')
const question = document.querySelector('question-container');
const input = document.querySelector('input-container');
const outputContainer = document.querySelector('.output-container');
const submitSwitch = document.getElementById('submit-switch');
let isFirstSubmission = true;

submitSwitch.addEventListener('click', () => {
    document.getElementById('input-field').value= '';
    currentQuestionIndex = (currentQuestionIndex + 1) % questionArray.length;
    document.querySelector('.questions').textContent = questionArray[currentQuestionIndex];
});

const questionArray = [
    { question: "what's 2+2", answer: "4"}
]