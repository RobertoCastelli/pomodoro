let breakTime = document.getElementById('breakTime');
let workTime = document.getElementById('workTime');
let clock = document.getElementById('clock');
let status = document.getElementById('status');
let buttons = document.querySelectorAll('button');

let workTimeValue;
let breakTimeValue;

reset();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id)
        switch (button.id) {
            case 'workMore':
                workTimeValue += 1;
                updateTime();
                checkTime();
                break;
            case 'workLess':
                workTimeValue -= 1;
                updateTime();
                checkTime();
                break;
            case 'breakMore':
                breakTimeValue += 1;
                updateTime();
                checkTime();
                break;
            case 'breakLess':
                breakTimeValue -= 1;
                updateTime();
                checkTime();
                break;
            case 'reset':
                reset();
                break;
            case 'start':
                start(workTimeValue * 60);
                break;
            case 'pause':
                pause();
                break;
            default:
                updateTime();
        }
    })
});




