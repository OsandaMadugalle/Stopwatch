const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elpasedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now() - elpasedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {

    if(isRunning){
        clearInterval(timer);
        elpasedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    elpasedTime = 0;
    startTime = 0;
    isRunning = false;
    display.textContent = '00:00:00:00';
}

function update(){

    const currentTime = Date.now();
    elpasedTime = currentTime - startTime;

    let hours = Math.floor(elpasedTime / 3600000);
    let minutes = Math.floor((elpasedTime % 3600000) / 60000);
    let seconds = Math.floor((elpasedTime % 60000) / 1000);
    let milliseconds = Math.floor((elpasedTime % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0'); 
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}