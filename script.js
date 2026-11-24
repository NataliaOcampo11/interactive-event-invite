// Gets the RSVP form
const form = document.getElementById("rsvp-form");

// Gets the attendance dropdown
const attendance = document.getElementById("attendance");

// Gets the confirmation message
const message = document.getElementById("message");

// Runs when the guest submits the form
form.addEventListener("submit", function(event) {

    // Prevents the page from reloading
    event.preventDefault();

    // Checks if the guest selected yes
    if (attendance.value === "yes") {

        // Shows a cheerful confirmation
        message.textContent = "🎉 You're on the list! See you at the GIF Gala!";

        // Changes the background to the party GIF
        document.body.style.backgroundImage = "url('party.gif')";

    } else {

        // Shows a friendly goodbye message
        message.textContent = "😢 We'll miss you! Thanks for letting us know.";

        // Changes the background to the sad GIF
        document.body.style.backgroundImage = "url('sad.gif')";
    }
});