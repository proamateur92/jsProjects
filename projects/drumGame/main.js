function playSound(e) {
  let keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`.key[data-key='${keyCode}']`);

  // 타이핑된 값으로부터 가져온 audio객체가 null이면 return
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  // transition이 종료될 때 변경된 property값이 transform이 아니면 return
  if (e.propertyName !== 'transform') return;

  // removeTransition 함수가 호출되는 시점의 key객체의 class이름 제거
  this.classList.remove('playing');
}

document.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});
