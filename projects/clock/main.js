const startTime = 90;
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const showTime = document.querySelector('.clock span');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + startTime;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + startTime;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + startTime;

  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const showAmPm = hours > 11 ? 'PM' : 'AM';
  const showMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const showSeconds = seconds < 10 ? `0${seconds}` : seconds;
  showTime.innerText = `${hours}:${showMinutes}:${showSeconds} ${showAmPm}`;
}

setInterval(setDate, 1000);
