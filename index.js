const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");

function colorSwitcher() {
  let selectedColor = colors[`${randomIntegerFromInterval(0, colors.length)}`];
  body.style.backgroundColor = selectedColor;
  startBtn.setAttribute("disabled", "disabled");
}

let intervalSwitcher = null;

startBtn.addEventListener("click", () => {
  intervalSwitcher = setInterval(() => {
    colorSwitcher();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalSwitcher), startBtn.removeAttribute("disabled");
});