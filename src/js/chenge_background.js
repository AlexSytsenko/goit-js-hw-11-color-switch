const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const body = document.body;
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let timerId = null;

function chengeBackground() {
  body.style = `background-color: ${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
}

function stopHandler() {
  clearInterval(timerId);
  btnStart.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Слушатели
btnStart.addEventListener('click', () => {
  timerId = setInterval(chengeBackground, 1000);
  btnStart.disabled = true; 
});
btnStop.addEventListener('click', stopHandler);

