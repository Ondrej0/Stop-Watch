const time = document.querySelector('.stop-watch .timer');
const startB = document.getElementById('start');
const stopB = document.getElementById('stop');
const resetB = document.getElementById('reset');

let seconds = 0;
let interval = null;

//Event listeners
startB.addEventListener('click', start);
stopB.addEventListener('click', stop);
resetB.addEventListener('click', reset);

// The timer update
function timer () {
    seconds++;

    // Format our time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    
    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    time.innerText = `${hrs}:${mins}:${secs}`
}

function start () {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds = 0;
    time.innerText = "00:00:00"
}