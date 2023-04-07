function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
}
let timerId = null;

refs.stop.setAttribute("disabled", "");

refs.start.addEventListener('click', onBtnStart);
refs.stop.addEventListener('click', onBtnStop)

function onBtnStart() {
    refs.start.setAttribute("disabled", "");
    refs.stop.removeAttribute("disabled", "");

    timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStop() {
    refs.stop.setAttribute("disabled", "");
    refs.start.removeAttribute("disabled", "");
    clearInterval(timerId);
}
