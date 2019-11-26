function reset() {
    workTimeValue = 25;
    breakTimeValue = 5;
    status.innerText = 'Time is the most valuable thing a man can spend.';
    updateTime();
}

function updateTime() {
    breakTime.innerText = `break \n${breakTimeValue} min`;
    workTime.innerText = `session \n${workTimeValue} min`;
    clock.innerText = workTimeValue < 10 ? `0${workTimeValue}:00` : `${workTimeValue}:00`;
}

function checkTime() {
    if (breakTimeValue <= 0) {
        breakTimeValue = 0;
    }
    if (workTimeValue <= 0) {
        workTimeValue = 0;
    }
    updateTime();
}

function pause() {
    console.log('pause');
}

function start(duration) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        clock.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(start);
        }
    }, 1000);
}

