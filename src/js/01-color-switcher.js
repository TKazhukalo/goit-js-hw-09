import '../css/common.css';
  const bodyEl = document.querySelector('body');
  const btnStart = document.querySelector('[data-start]');
  const btnStop = document.querySelector('[data-stop]');
  btnStart.addEventListener('click', onClickBtnStart);
  btnStop.addEventListener('click', onClickBtnStop);
  let timerId = null;
function onClickBtnStart() {

  timerId = setInterval(randomColor, 1000);

  btnStart.toggleAttribute('disabled');
  btnStop.removeAttribute('disabled');
  
}

function onClickBtnStop() {
  clearInterval(timerId);

  btnStart.removeAttribute('disabled');
  btnStop.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function randomColor() {
       bodyEl.style.background = getRandomHexColor();
 }