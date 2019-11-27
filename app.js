// GETS
let breakTime = document.getElementById('breakTime');
let workTime = document.getElementById('workTime');
let clock = document.getElementById('clock');
let status = document.getElementById('status');
let buttons = document.querySelectorAll('button');
let counter = document.getElementById('counter');
let sndBell = document.getElementById('bell');

// GLOBAL VARIABLES
let clockTimeValue;
let interval;
let minutes;
let seconds;
let timer;

// INIT STATE
let workTimeValue = 25;
let breakTimeValue = 5;
let counterValue = 0;
let session = 'breakTime';
let statusMessage = 'Time is the most valuable thing a man can spend.';

// RENDER INIT STATE
updateValues();
updateClock(workTimeValue, 0);

// ACTIONS
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (button.id) {
            case 'workMore':
                workTimeValue += 1;
                updateValues();
                updateClock(workTimeValue, 0);
                break;
            case 'workLess':
                workTimeValue -= 1;
                checkTimeValues();
                updateValues();
                updateClock(workTimeValue, 0);
                break;
            case 'breakMore':
                breakTimeValue += 1;
                updateValues();
                break;
            case 'breakLess':
                breakTimeValue -= 1;
                checkTimeValues();
                updateValues();
                break;
            case 'reset':
                document.getElementById('start').removeAttribute('disabled', true);
                reset();
                updateValues();
                updateClock(workTimeValue, 0);
                break;
            case 'start':
                document.getElementById('start').setAttribute('disabled', true);
                start(clockTimeValue * 60);
                break;
            case 'pause':
                document.getElementById('start').removeAttribute('disabled', true);
                pause();
                break;
            default:
                updateValues();
        }
    })
});




