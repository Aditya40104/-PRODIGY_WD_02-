let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const clearLapsBtn = document.getElementById('clearLapsBtn');
const lapsContainer = document.getElementById('laps');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', addLap);
clearLapsBtn.addEventListener('click', clearLaps);

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    lapsContainer.innerHTML = '';
}

function addLap() {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.textContent = display.textContent;
        lapsContainer.appendChild(lapTime);
    }
}

function clearLaps() {
    lapsContainer.innerHTML = '';
}

function updateTime() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
