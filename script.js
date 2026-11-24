// Gets the RSVP form from the HTML
const form = document.getElementById("rsvp-form");

// Gets the attendance dropdown
const attendance = document.getElementById("attendance");

// Gets the paragraph where the confirmation will appear
const message = document.getElementById("message");

// Runs when the guest submits the form
form.addEventListener("submit", function(event) {

    // Prevents the page from reloading
    event.preventDefault();

    // Checks if the guest selected yes
    if (attendance.value === "yes") {
        message.textContent = "🎉 You're on the list! See you at the GIF Gala!";
    } else {
        message.textContent = "We'll miss you! Thanks for letting us know.";
    }
});