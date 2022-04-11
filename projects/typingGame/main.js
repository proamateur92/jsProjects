const keyword_list = [
  'tarantism',
  'chantepleur',
  'chirogymnast',
  'pulicosity',
  'deosculation',
  'onychophagist',
  'philodox',
  'sesquipedalian',
  'schadenfreude',
  'plenilune',
  'floccinaucinihilipilification',
];

const timer = 10;
let penaltyTime = 0;
let timeOver;
let score = 0;
let keyword = '';

const gameForm = document.querySelector('.game-frm');
const startBtn = document.querySelector('.game__startBtn');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const quesetion = document.querySelector('.game-frm__quesetion');
const answer = document.querySelector('.game-frm__input');
const pre_answer = document.querySelector('.game-frm__show');

function startButtonInit() {
  startBtn.classList.remove('stop');
  startBtn.innerText = '시작하기';
}

function startButtonPlay() {
  startBtn.classList.add('stop');
  startBtn.innerText = '게임중';
}

function randomKeyword() {
  keywordIndex = Math.floor(Math.random() * keyword_list.length);
  if (keyword === keyword_list[keywordIndex]) randomKeyword();
  keyword = keyword_list[keywordIndex];
  quesetion.innerText = `${keyword}`;
}

function setScore() {
  score++;
  gameScore.innerText = `점수: ${score}점`;
}

function showPreAnswer(answer) {
  pre_answer.innerText = `✅${answer}`;
  pre_answer.classList.remove('hidden');
  setTimeout(() => {
    pre_answer.classList.add('hidden');
  }, 1500);
}

function isCorrect(event) {
  const value = answer.value;

  if (score > 5) {
    penaltyTime = Math.floor(score / 5);
  }

  if (keyword === value) {
    answer.value = '';
    gameTimer.innerText = `남은시간: ${timer - penaltyTime}초`;
    showPreAnswer(keyword);
    clearInterval(timeOver);
    timerOn(timer);
    setScore();
    randomKeyword();
  }

  event.preventDefault();
}

gameForm.addEventListener('submit', isCorrect);

function timerOn(time) {
  leftime = time - penaltyTime;

  timeOver = setInterval(() => {
    if (leftime < 1) {
      alert('타임오버!');
      clearInterval(timeOver);
      startButtonInit();
      return false;
    }

    gameTimer.innerText = `남은시간: ${--leftime}초`;
  }, 1000);
}

function init() {
  if (startBtn.innerText === '시작하기') {
    penaltyTime = 0;
    score = 0;
    gameScore.innerText = `점수: ${score}점`;
    gameTimer.innerText = `남은시간: ${timer - penaltyTime}초`;
    answer.value = '';
    answer.focus();
    timerOn(timer);
    randomKeyword();
    startButtonPlay();
  }
}

startBtn.addEventListener('click', init);
