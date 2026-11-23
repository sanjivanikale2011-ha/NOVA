
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
    } else {
        password.type = "password";
        toggle.textContent = "Show";
    }

});

document.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message")
    .textContent = "Demo only: Login system is not connected yet.";

});
