import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const refs = {
    input: document.querySelector('input#datetime-picker'),
    start: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

refs.start.setAttribute("disabled", "");

const curentTime = Date.now()
let selectedData = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedData = selectedDates[0].getTime()
        if (selectedDates[0].getTime() < curentTime) {
            Notify.failure('Please choose a date in the future');
        }
        if (selectedDates[0].getTime()>curentTime ) {
            refs.start.removeAttribute("disabled", "");
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

refs.input.addEventListener('focus', onInputFocus)
refs.start.addEventListener('click', onBtnStart)

function onInputFocus() {
    flatpickr(refs.input, options);
}

function onBtnStart() {
    
    setInterval(() => {
        const dateNow = Date.now()

        const lastTime = selectedData - dateNow;
       
        const {days, hours, minutes, seconds} =  convertMs(lastTime)
        
        refs.days.textContent = addLeadingZero(days);
        refs.hours.textContent = addLeadingZero(hours);
        refs.minutes.textContent = addLeadingZero(minutes);
        refs.seconds.textContent = addLeadingZero(seconds);
    }, 1000)
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0')
}