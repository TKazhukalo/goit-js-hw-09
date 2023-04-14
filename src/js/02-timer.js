// Описаний в документації
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import '../css/common.css';
import '../css/timer.css';

const btnStart = document.querySelector('[data-start]');
const inputEl = document.querySelector('input#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
//const valueEl = document.querySelector('.value');
let timerId = null;
btnStart.addEventListener('click', onClickBtn);
btnStart.disabled = true;

function onClickBtn() {
  btnStart.disabled = true;
  inputEl.disabled = true;

  timerId = setInterval(() => {
  const selectedInputDates = new Date(inputEl.value);
  const endDate = selectedInputDates - Date.now()
  
  const { days, hours, minutes, seconds } = convertMs(endDate);
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);

    if (endDate<1000) {
      clearInterval(timerId);
      btnStart.disabled = false;
    }
  }, 1000)
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    if (selectedDates[0] <= Date.now()) {
      btnStart.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
     // window.alert('Please choose a date in the future');
      //return;
    }
    /*if (selectedDates[0] > Date.now())*/
    else {
     Notiflix.Notify.info('Correct date');
      btnStart.disabled = false;
      clearInterval(timerId);
    }
  },
};
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(inputEl,options);
function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}





