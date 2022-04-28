// 듀스 기능 추가
// 플레이어 추가
// 효과 추가 등
// 기능 개선 필요

const p1 = {
  score: 0,
  button: document.querySelector('.player1-btn'),
  display: document.querySelector('.score-board > span:first-child'),
};

const p2 = {
  score: 0,
  button: document.querySelector('.player2-btn'),
  display: document.querySelector('.score-board > span:last-child'),
};

let winningPoint = 5;
let isGameOver = false;

const scoreBoard = document.querySelector('.score-board');
const roundInput = document.querySelector('#round');
const resetBtn = document.querySelector('.reset-btn');

function roundChange() {
  winningPoint = parseInt(this.value);
  reset();
}

const reset = () => {
  isGameOver = false;

  for (let p of [p1, p2]) {
    p.score = 0;
    p.button.disabled = false;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.display.innerText = 0;
  }
};

const updateScore = (player, opponent) => {
  if (!isGameOver) {
    player.score++;
    console.log(1);
    console.log(player.score);
    if (player.score === winningPoint) {
      isGameOver = true;
      player.button.disabled = true;
      opponent.button.disabled = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
    }
    player.display.innerText = player.score;
  }
};

p1.button.addEventListener('click', function () {
  updateScore(p1, p2);
});
p2.button.addEventListener('click', function () {
  updateScore(p2, p1);
});

resetBtn.addEventListener('click', reset);
roundInput.addEventListener('change', roundChange);
