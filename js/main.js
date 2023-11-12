const minutesBlock = document.querySelector('.js-minutes'),
	secondsBlock = document.querySelector('.js-seconds'),
	hundredthsSecondBlock = document.querySelector('.js-hundredths-second'),
	btnStart = document.querySelector('.js-btn-start'),
	btnStop = document.querySelector('.js-btn-stop'),
	btnReset = document.querySelector('.js-btn-reset');

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

const startTimer = () => {
	// miliseconds++;
	miliseconds += 10;

	if (miliseconds <= 99) {
		hundredthsSecondBlock.innerHTML = miliseconds;
	}

	if (miliseconds == 100) {
		hundredthsSecondBlock.innerHTML = '00';
	}

	if (miliseconds > 99) {
		seconds++;
		secondsBlock.innerHTML = '0' + seconds;
		miliseconds = 0;
	}

	if (seconds > 9) {
		secondsBlock.innerHTML = seconds;
	}

	if (seconds > 59) {
		minutes++;
		minutesBlock.innerHTML = '0' + minutes;
		seconds = 0;
		secondsBlock.innerHTML = '0' + seconds;
	}

	if (minutes > 9) {
		minutesBlock.innerHTML = minutes;
	}
}

btnStart.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
	clearInterval(interval);
});

btnReset.addEventListener('click', () => {
	clearInterval(interval);
	seconds = 0;
	miliseconds = 0;
	minutes = 0;

	minutesBlock.innerHTML = '00';
	secondsBlock.innerHTML = '00';
	hundredthsSecondBlock.innerHTML = '00';
});

