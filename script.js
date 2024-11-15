const submitButton = document.querySelector('.submit-container');
const header = document.querySelector('.title-container');
const question = document.querySelector('.question-container');
const input = document.querySelector('input-container');
const outputContainer = document.querySelector('.output-container');
const startButton = document.querySelector('.start-button');
const startSwitch = document.getElementById('start-switch')
const submitSwitch = document.getElementById('submit-switch');
const checkAnswer = document.getElementById('input-field');
let isFirstSubmission = true;
let score = 0;

document.querySelector('#start-switch button').addEventListener('click', function() {
    displayNextQuestion()

    // display next question
    function displayNextQuestion() {
        if (index < questionArray.length) {
            document.getElementById("question-bar").textContent = questionArray[index].question;
        }
    }
    
    // submit game
    document.querySelector('#submit-switch button').addEventListener('click', () => {
        checkCorrectAnswer();
        displayNextQuestion();
    });
    
    // check answer
    function checkCorrectAnswer() {
        const userInput = document.getElementById("input-field").value;
        if (userInput.toLowerCase() === answerArray[index].answer.toLowerCase()) {
            alert('correct!');
            score++;
            document.getElementById('score').innerHTML = score;
            index++;
        } else {
            alert('incorrect! try again.');
            score--;
            document.getElementById('score').innerHTML = score;
        }
    
    };    
    this.style.display = 'none';
});

const questionArray = [
    { question:'whats 2+2?'},
    { question: 'whats the capital of NY?'},
    { question: 'where is rome located?'},
    { question: 'how many feet are in a mile?'},
    { question: 'In tennis, what term is used for a score of zero?'},
    { question: 'Which band released the hit song “Bohemian Rhapsody”?'},
    { question: 'What is the chemical symbol for water?'},
    { question: 'The highest volcano outside of South America also doubles as its home continents highest mountain. In what country is this 19,000-foot peak found?'},
    { question: 'What is the hardest natural substance on Earth?'},
    { question: 'What is the largest planet in our Solar System?'} 
];
index = 0; 

const answerArray = [
    { answer: '4'},
    { answer: 'albany'},
    { answer: 'italy'},
    { answer: '5280'},
    { answer: 'Love'},
    { answer: 'Queen'},
    { answer: 'H2O'},
    { answer: 'Tanzania'},
    { answer: 'Diamond'},
    { answer: 'Jupiter'}
];


