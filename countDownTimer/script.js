'use strict';

const form = document.querySelector('form');
const app = document.getElementById('app');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const minutesInput = document.getElementById('minutes-input');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const alarm = document.getElementById('alarm');

let timer;

function updateDisplay(totalSeconds){
  const minutes2 = Math.floor(totalSeconds / 60) ;
  const seconds2 = totalSeconds % 60;

  minutes.textContent = String(minutes2).padStart(2, '0');
  seconds.textContent = String(seconds2).padStart(2, '0');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  clearInterval(timer);

  let totalSeconds = Number(minutesInput.value) * 60;

  if (totalSeconds <= 0) {
    alert('Please enter a valid number of minutes');
    return;
  }

  updateDisplay(totalSeconds);

  timer = setInterval(() => {
    totalSeconds--;

    updateDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(timer);


      alarm.currentTime = 0;
      alarm.play();

      alert("Time's up");
    }
  }, 1000);
});


stopBtn.addEventListener('click', () => {
    clearInterval(timer);

    alarm.pause();
    alarm.currentTime = 0;
});

