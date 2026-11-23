// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}


// CLOSE MENU AFTER CLICKING A LINK

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navLinks && menuToggle) {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});


// EXPLORE BUTTON

const exploreBtn = document.getElementById("exploreBtn");
const featuresSection = document.getElementById("features");

if (exploreBtn && featuresSection) {
    exploreBtn.addEventListener("click", function () {
        featuresSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}


// ABOUT BUTTON

const aboutBtn = document.getElementById("aboutBtn");

if (aboutBtn) {
    aboutBtn.addEventListener("click", function () {
        alert("Thanks for exploring Nova!");
    });
}


// STATISTICS COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");
const statsSection = document.getElementById("stats");
let hasCounted = false;

function runCounters() {
    counters.forEach(function (counter) {
        const target = Number(counter.getAttribute("data-target"));
        const increment = Math.ceil(target / 50);

        function updateCounter() {
            const current = Number(counter.innerText);

            if (current < target) {
                counter.innerText = Math.min(current + increment, target);
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target + "+";
            }
        }

        updateCounter();
    });
}

if (statsSection && counters.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && !hasCounted) {
            runCounters();
            hasCounted = true;
        }
    }, { threshold: 0.4 });

    observer.observe(statsSection);
}

// CONNECT TO NOVA BACKEND
const apiButton = document.getElementById("apiButton");
const apiResult = document.getElementById("apiResult");

if (apiButton && apiResult) {
    apiButton.addEventListener("click", async function () {
        apiResult.textContent = "Connecting...";

        try {
            const response = await fetch("http://localhost:3000/api/info");
            const data = await response.json();

            apiResult.textContent =
                `${data.message} | Status: ${data.status}`;
        } catch (error) {
            apiResult.textContent = "Could not connect to the server.";
        }
    });
}




