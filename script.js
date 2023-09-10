function updateTimeandDate() {
    const dateUTC = document.getElementById("date");
    const timeUTC = document.getElementById("time");

    const presentDate = new Date();


    const dateOptions = {
        timeZone: 'UTC',
        weekday: 'long',
    };

    const DateFormat = presentDate.toLocaleDateString(undefined, dateOptions);
    dateUTC.textContent = `Date (UTC): ${DateFormat}`;

    const timeOptions = {
        timeZone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 3,
    };

    const TimeFormat = presentDate.toLocaleTimeString(undefined, timeOptions);
    timeUTC.textContent = `Time (UTC): ${TimeFormat}`;
}

function initializePage() {
    updateTimeandDate();

    setInterval(updateTimeandDate, 10);
}

window.addEventListener("load", initializePage);

