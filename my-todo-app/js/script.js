

/* Close mobile menu after clicking a link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   IMPACT COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters() {

    if (countersStarted) {
        return;
    }

    const impactSection = document.querySelector(".impact");

    const sectionPosition =
        impactSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight;

    if (sectionPosition < screenPosition) {

        countersStarted = true;

        counters.forEach(function (counter) {

            const target =
                Number(counter.getAttribute("data-target"));

            let current = 0;

            const increment =
                Math.ceil(target / 50);

            const timer = setInterval(function () {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 30);

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please complete all fields.";

        formMessage.style.color = "#c0392b";

        return;

    }


    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";

    formMessage.style.color = "#176b45";


    contactForm.reset();

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "Hope for Communities Foundation website loaded successfully."
);