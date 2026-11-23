
const form = document.getElementById("signupForm");

const password = document.getElementById("password");
const confirmPassword =
    document.getElementById("confirmPassword");

const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function() {

    password.type =
        password.type === "password" ? "text" : "password";

    toggle.textContent =
        password.type === "password" ? "Show" : "Hide";

});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const message = document.getElementById("message");

    if (password.value !== confirmPassword.value) {
        message.textContent = "Passwords do not match!";
        return;
    }

    message.textContent =
        "Demo complete! Signup is not connected to a server.";

    form.reset();
    toggle.textContent = "Show";

});
