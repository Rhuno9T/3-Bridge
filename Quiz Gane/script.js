// script.js (replace your current file with this)

/* State */
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

/* DOM references */
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');
const quizBox = document.getElementById('quiz-box');

/* Load questions and start */
async function loadQuestions() {
  try {
    const res = await fetch('questions.json');
    questions = await res.json();
    currentQuestionIndex = 0;
    score = 0;
    // Ensure UI is reset before showing
    resetUI();
    showQuestion();
  } catch (err) {
    questionContainer.innerText = 'Failed to load questions.';
    console.error(err);
  }
}

/* Show current question */
function showQuestion() {
  resetState();
  const question = questions[currentQuestionIndex];
  if (!question) return;
  questionContainer.innerText = question.question;

  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('answer-btn');
    button.addEventListener('click', () => selectAnswer(button, answer.correct));
    answersContainer.appendChild(button);
  });
}

/* Clear answers and hide next button */
function resetState() {
  nextBtn.classList.add('hidden');
  answersContainer.innerHTML = '';
}

/* When an answer is selected */
function selectAnswer(button, correct) {
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => (btn.disabled = true));

  if (correct) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('wrong');
    // Optionally highlight the correct answer:
    highlightCorrectAnswer();
  }
  nextBtn.classList.remove('hidden');
}

/* Optional helper: highlight the correct answer after a wrong choice */
function highlightCorrectAnswer() {
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    // find matching text in current question answers
    const currentAnswers = questions[currentQuestionIndex].answers;
    const match = currentAnswers.find(a => a.text === btn.innerText && a.correct);
    if (match) btn.classList.add('correct');
  });
}

/* Show result view */
function showResult() {
  quizBox.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  scoreText.innerText = `${score} / ${questions.length}`;
}

/* Reset UI to a clean state (removes classes, ensures buttons enabled/hidden) */
function resetUI() {
  // Clear answer area
  answersContainer.innerHTML = '';

  // Hide Next button
  nextBtn.classList.add('hidden');

  // Ensure quiz box is visible and result hidden
  quizBox.classList.remove('hidden');
  resultContainer.classList.add('hidden');

  // Clear score text (in case it was shown)
  if (scoreText) scoreText.innerText = '';

  // Reset any leftover state classes on elements (defensive)
  const marked = document.querySelectorAll('.correct, .wrong');
  marked.forEach(el => {
    el.classList.remove('correct', 'wrong');
  });
}

/* Next question button handler */
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

/* Restart / Play Again handler — fully reset score & UI */
restartBtn.addEventListener('click', () => {
  // Reset the core state
  currentQuestionIndex = 0;
  score = 0;

  // Fully reset UI (remove classes, clear answer buttons, hide next, show quiz)
  resetUI();

  // Show the first question again
  showQuestion();
});

/* Initial load */
loadQuestions();
