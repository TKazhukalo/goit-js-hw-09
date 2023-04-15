import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/common.css';
import '../css/timer.css';
const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
   const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
   
      } else {
        reject({ position, delay });
      }
    }, delay);
     
  })
 
  
}

function onSubmit(evt) {
  evt.preventDefault();
  let delayTime= Number(delayEl.value);
  let step = Number(stepEl.value);
  let amount = Number(amountEl.value);
  for (let i = 1; i <= amount; i += 1){
    let delays = delayTime + step * i;
createPromise(i, delays)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
  //formEl.reset();
}


