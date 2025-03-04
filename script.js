function updateClock() { // Defines a function named updateClock that will update the clock display.
    const clockElement = document.getElementById('clock')  // Gets the HTML element with the id="clock" and stores it in the clockElement variable.
    const now = new Date(); //  Creates a new Date object (now) that holds the current date and time.
 
    const hours = String(now.getHours()).padStart(2, '0'); // Gets the current hour using now.getHours(), converts it to a string, and ensures it is always 2 digits using padStart(2, '0'). For example, 9 becomes 09.
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Gets the current minute using now.getMinutes(), converts it to a string, and ensures it is always 2 digits.
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Gets the current second using now.getSeconds(), converts it to a string, and ensures it is always 2 digits.

    const timeString = `${hours}:${minutes}:${seconds}`; // Combines the hours, minutes, and seconds into a single string in the format HH:MM:SS.
    clockElement.textContent = timeString; // Updates the content of the clockElement with the timeString.
}

//Update the clock every second

setInterval(updateClock, 1000); // Calls the updateClock function every 1000 milliseconds (1 second) to keep the clock updated in real-time.

//Initialize the clock immediately on page load
updateClock(); //Calls the updateClock function immediately when the page loads to display the time without waiting for the first interval.