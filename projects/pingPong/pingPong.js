let p1 = 0;
let user2 = 0;
// 라운드 수 5로 초기값 설정
let round = 5;
let isGameOver = false;

const scoreBoard = document.querySelector('.score-board');
const roundInput = document.querySelector('#round');
const p1Btn = document.querySelector('.player1-btn');
const p2Btn = document.querySelector('.player2-btn');
const resetBtn = document.querySelector('.reset-btn');
const p1Score = document.querySelector('.score-board > span:first-child');
const p2Score = document.querySelector('.score-board > span:last-child');

function roundChange() {
  round = parseInt(this.value);
  reset();
}

const reset = () => {
  isGameOver = false;
  p1Btn.disabled = false;
  p2Btn.disabled = false;
  p1 = 0;
  user2 = 0;
  p1Score.classList.remove('has-text-success', 'has-text-danger');
  p2Score.classList.remove('has-text-success', 'has-text-danger');
  p1Score.innerText = 0;
  p2Score.innerText = 0;
};

const scoreUp = event => {
  const player = event.target.dataset.num;

  if (!isGameOver) {
    player === '1' ? p1++ : user2++;

    p1Score.innerText = p1;
    p2Score.innerText = user2;

    if (p1 >= round || user2 >= round) {
      isGameOver = true;
      // 최종 스코어 도달 시 승리 녹색 글씨, 패배 빨간 글씨
      // 버튼 2개 잠김
      p1Btn.disabled = true;
      p2Btn.disabled = true;
      if (p1 > user2) {
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
      } else {
        p1Score.classList.add('has-text-danger');
        p2Score.classList.add('has-text-success');
      }
    }
  }
};

p1Btn.addEventListener('click', scoreUp);
p2Btn.addEventListener('click', scoreUp);
resetBtn.addEventListener('click', reset);
roundInput.addEventListener('change', roundChange);
