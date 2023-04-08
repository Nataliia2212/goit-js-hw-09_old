import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject ({position, delay})
      }
    }, delay)
  })
}

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();

  let position = 1;
  let delay = Number(refs.delay.value);
  
  for (let i = 0; i < Number(refs.amount.value); i += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += Number(refs.step.value);
    position += 1;
  }
}
