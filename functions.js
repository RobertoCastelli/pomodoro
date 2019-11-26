// INIT & RESET POMODORO CLOCK
function reset() {
    clearInterval(interval);
    workTimeValue = 25;
    breakTimeValue = 5;
    counterValue = 0;
    session = 'breakTime';  
    statusMessage = 'Time is the most valuable thing a man can spend.';
}

// AGGIORNA I VALORI CUSTOM
function updateValues() {
    status.innerText = statusMessage;
    breakTime.innerText = `break \n${breakTimeValue} min`;
    workTime.innerText = `session \n${workTimeValue} min`;
    counter.innerText = counterValue;
    clockTimeValue = workTimeValue;
}

// CONTROLLA IMMISSIONE MINUTI CUSTOM NEGATIVI
function checkTimeValues() {
    if (breakTimeValue <= 0) {
        breakTimeValue = 0;
    }
    if (workTimeValue <= 0) {
        workTimeValue = 0;
    }
}

// FORMATTA E RENDERIZZA OROLOGIO
function updateClock(min, sec) {
    min = min < 10 ? `0${min}` : `${min}`;
    sec = sec < 10 ? `0${sec}` : `${sec}`;
    clock.innerText = `${min}:${sec}`;
}

// START OROLOGIO
function start(duration) {
    statusMessage = 'Work in progress';
    timer = duration;
    interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        updateClock(minutes, seconds);
        timer--;

        clockTimeValue = workTimeValue;
        updateValues();
        changeTimer();

    }, 1000);
}

// PAUSA OROLOGIO
function pause() {
    clearInterval(interval);
    updateClock(minutes, seconds);
    clockTimeValue = timer / 60;
}

function changeTimer() {
    if (timer < 0 && session == 'breakTime') {
        clearInterval(interval);
        counterValue++;
        updateValues();
        start(breakTimeValue * 60);
        session = 'workTime';
        statusMessage = 'Break in progress';
    } else if (timer < 0 && session == 'workTime') {
        clearInterval(interval);
        statusMessage = 'Work in progress';
        updateValues();
        start(breakTimeValue * 60);
        session = 'breakTime';
    }
}



