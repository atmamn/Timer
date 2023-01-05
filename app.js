// variables
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for starting, pausing & stopping the timer
let startVariable = null;
	// timer status for for getting the status of the status. i.e, pause, play, stop
let timerStatus = 'stopped';

// placeholders variables
let placeholderSeconds = 0;
let placeholderMinutes = 0;
let placeholderHours = 0;

function myFunctions () {
	seconds++

	if(seconds / 60 === 1) {
		seconds = 0;
		minutes++

		if (minutes / 60 === 1) {
			minutes = 0;
			hours++
		}
	}

	if (seconds < 10) {
		placeholderSeconds = '0' + seconds.toString();
	} else {
		placeholderSeconds = seconds
	}
	if (minutes < 10) {
		placeholderMinutes = '0' + minutes.toString();
	} else {
		placeholderMinutes = minutes
	}
	if (hours < 10) {
		placeholderHours = '0' + hours.toString();
	} else {
		placeholderHours = hours
	}

	let displayTimer = document.querySelector('.timer').innerText = placeholderHours + ':' + placeholderMinutes + ':' + placeholderSeconds;
}



startBtn.addEventListener('click', function () {
	if (timerStatus === 'stopped') {
		startVariable = window.setInterval(myFunctions, 1000);
		document.querySelector('#startBtn').innerHTML = `<span class="material-icons" id="pauseBtn">pause</span>`;
		timerStatus = 'started';
		resetBtn.style.display = 'block';
	} else {
		window.clearInterval(startVariable);
		document.querySelector('#startBtn').innerHTML = `<span class="material-icons" id="startBtn">play_arrow</span>`;
		timerStatus = 'stopped';
	}
})

resetBtn.addEventListener('click', function() {
	window.clearInterval(startVariable);
	seconds = 0;
	minutes = 0;
	hours = 0;

	document.querySelector('.timer').innerHTML = "00:00:00";
	document.querySelector('#startBtn').innerHTML = `<span class="material-icons" id="startBtn">play_arrow</span>`;
	resetBtn.style.display = 'none';
})