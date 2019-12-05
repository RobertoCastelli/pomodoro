// RENDER CUSTOM VALUE
function updateValues() {
    status.innerText = statusMessage;
    breakTime.innerText = `set break \n${breakTimeValue} min`;
    workTime.innerText = `set work \n${workTimeValue} min`;
    counter.innerHTML = counterValue;
    clockTimeValue = workTimeValue;
}

// BLOCK CUSTOM MINUTE < 1 
function checkTimeValues() {
    if (breakTimeValue <= 1) {
        breakTimeValue = 1;
    }
    if (workTimeValue <= 1) {
        workTimeValue = 1;
    }
}

// FORMAT & RENDER CLOCK
function updateClock(min, sec) {
    min = min < 10 ? `0${min}` : `${min}`;
    sec = sec < 10 ? `0${sec}` : `${sec}`;
    clock.innerText = `${min}:${sec}`;
}

// START CLOCK
function start(duration) {
    statusMessage = 'Good WORK \nkeep it up!';
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

// RESET CLOCK
function reset() {
    clearInterval(interval);
    workTimeValue = 25;
    breakTimeValue = 5;
    counterValue = 0;
    session = 'breakTime';
    statusMessage = 'Time is the most valuable thing a man can spend.';
}

// PAUSE CLOCK
function pause() {
    clearInterval(interval);
    updateClock(minutes, seconds);
    clockTimeValue = timer / 60;
}

// SWITCH WORK <-- CLOCK --> BREAK
function changeTimer() {
    if (timer < 0 && session == 'breakTime') {
        clearInterval(interval);
        playAudio(sndBell);
        updateValues();
        start(breakTimeValue * 60);
        counterValue++;
        session = 'workTime';
        statusMessage = 'Take a BREAK \nand Relax';
    } else if (timer < 0 && session == 'workTime') {
        clearInterval(interval);
        playAudio(sndBell);
        updateValues();
        start(workTimeValue * 60);
        session = 'breakTime';
        statusMessage = 'Good WORK \nkeep it up!';
    }
}

// PLAYS AUDIO
function playAudio(sound) {
    sound.play();
}

