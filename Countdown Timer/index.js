// Timer countdown functionality
function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;

    const countdownInterval = setInterval(function() {
        hours = Math.floor((timer / 3600));
        minutes = Math.floor((timer % 3600) / 60);
        seconds = Math.floor(timer % 60);

        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        // If the countdown is over, clear the interval
        if (--timer < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// Start countdown for 2 hours (2 hours * 60 minutes * 60 seconds)
startCountdown(2 * 60 * 60);
