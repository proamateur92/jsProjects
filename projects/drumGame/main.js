function playSound(e) {
  let keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`.key[data-key='${keyCode}']`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(e.propertyName);
  this.classList.remove('playing');
}

document.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});
