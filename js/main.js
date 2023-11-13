const daysBlock = document.querySelector('.js-days'),
	hoursBlock = document.querySelector('.js-hours'),
	minutesBlock = document.querySelector('.js-minutes'),
	secondsBlock = document.querySelector('.js-seconds'),
	btnStart = document.querySelector('.js-btn-start'),
	btnStop = document.querySelector('.js-btn-stop'),
	btnReset = document.querySelector('.js-btn-reset');

let interval;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;



const startTimer = () => {
	seconds++;
	secondsBlock.innerHTML = '0' + seconds;

	if (seconds > 9) {
		secondsBlock.innerHTML = seconds;
	}

	if (seconds == 60) {
		secondsBlock.innerHTML = '00';
	}

	if (seconds > 59) {
		minutes++;
		minutesBlock.innerHTML = '0' + minutes;
		seconds = 0;
	}

	if (minutes > 9) {
		minutesBlock.innerHTML = minutes;
	}

	if (minutes > 59) {
		hours++;
		hoursBlock.innerHTML = '0' + hours;
		minutes = 0;
		minutesBlock.innerHTML = '0' + minutes;
	}

	if (hours > 9) {
		hoursBlock.innerHTML = hours;
	}

	if (hours > 23) {
		days++;
		daysBlock.innerHTML = '0' + days;
		hours = 0;
		hoursBlock.innerHTML = '0' + hours;
	}

	if (days > 9) {
		daysBlock.innerHTML = days;
	}
}

btnStart.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTimer, 1000);
});

btnStop.addEventListener('click', () => {
	clearInterval(interval);
});

btnReset.addEventListener('click', () => {
	clearInterval(interval);
	seconds = 0;
	minutes = 0;
	hours = 0;
	days = 0;

	secondsBlock.innerHTML = '00';
	minutesBlock.innerHTML = '00';
	hoursBlock.innerHTML = '00';
	daysBlock.innerHTML = '00';
});

