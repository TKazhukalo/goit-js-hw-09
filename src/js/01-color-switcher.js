import '../css/common.css';
import '../css/timer.css';
  const bodyEl = document.querySelector('body');
  const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
btnStop.disabled = true;
  btnStart.addEventListener('click', onClickBtnStart);
  btnStop.addEventListener('click', onClickBtnStop);
  let timerId = null;
function onClickBtnStart() {

  timerId = setInterval(randomColor, 1000);

 btnStart.disabled = true;
 btnStop.disabled = false;
  
}

function onClickBtnStop() {

 btnStart.disabled = false;
 btnStop.disabled = true;
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function randomColor() {
       bodyEl.style.background = getRandomHexColor();
 }