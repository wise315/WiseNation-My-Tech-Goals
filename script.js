document.addEventListener("DOMContentLoaded", function() {
    const currentTimeUTC = document.getElementById("currentTimeUTC");
    const currentDay = document.getElementById("currentDay");

    function updateTimeAndDay() {
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString();
        currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
