// Function to calculate the time remaining until the birthday
function timeUntilBirthday() {
    const now = new Date();
    const birthday = new Date('2024-04-23T00:00:00');

    const diff = birthday - now;
    return diff > 0 ? diff : 0;
}

// Function to update the countdown timer
function updateCountdown() {
    const diff = timeUntilBirthday();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);

    if (diff <= 0) {
        showSurprise();
    }
}

// Function to add leading zero if needed
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function showSurprise() {
    document.getElementById('countdown').classList.add('hidden');
    document.getElementById('surprise').classList.remove('hidden');
}

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
