/* =========================================
   SWEET CRUMBS BAKERY
   JavaScript
   Part 3 - Interactive Features
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Mobile Navigation ---------- */

    const menuToggle = document.getElementById("menuToggle");
    const navList = document.getElementById("navList");

    if (menuToggle && navList) {

        menuToggle.addEventListener("click", function () {

            navList.classList.toggle("active");

            const isOpen = navList.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );
        });
    }


    /* ---------- Dynamic Copyright Year ---------- */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* ---------- Back To Top Button ---------- */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

     /* ---------- Custom Cake Form Validation ---------- */

    const cakeForm = document.getElementById("cakeEnquiryForm");

    if (cakeForm) {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const occasion = document.getElementById("occasion");
        const flavour = document.getElementById("flavour");
        const size = document.getElementById("size");
        const date = document.getElementById("date");

        const formMessage = document.getElementById("formMessage");


        function showError(input, errorId, message) {

            input.classList.add("error");

            document.getElementById(errorId).textContent = message;

        }


        function clearError(input, errorId) {

            input.classList.remove("error");

            document.getElementById(errorId).textContent = "";

        }


        cakeForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let isValid = true;


             /* ---------- FAQ Accordion ---------- */

    const faqQuestions = document.querySelectorAll(".faq-question");

    if (faqQuestions.length > 0) {

        faqQuestions.forEach(function (question) {

            question.addEventListener("click", function () {

                const isExpanded =
                    question.getAttribute("aria-expanded") === "true";

                const answerId =
                    question.getAttribute("aria-controls");

                const answer =
                    document.getElementById(answerId);

                question.setAttribute(
                    "aria-expanded",
                    !isExpanded
                );

                answer.hidden = isExpanded;

            });

        });

    }

        /* ---------- Contact Form Validation ---------- */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        const contactName = document.getElementById("contactName");
        const contactEmail = document.getElementById("contactEmail");
        const contactSubject = document.getElementById("contactSubject");
        const contactMessage = document.getElementById("contactMessage");

        const contactFormMessage =
            document.getElementById("contactFormMessage");

        function showContactError(input, errorId, message) {
            input.classList.add("error");
            document.getElementById(errorId).textContent = message;
        }

        function clearContactError(input, errorId) {
            input.classList.remove("error");
            document.getElementById(errorId).textContent = "";
        }

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let isValid = true;

            /* Full Name */

            if (contactName.value.trim() === "") {

                showContactError(
                    contactName,
                    "contactNameError",
                    "Please enter your full name."
                );

                isValid = false;

            } else {

                clearContactError(
                    contactName,
                    "contactNameError"
                );

            }


            /* Email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (contactEmail.value.trim() === "") {

                showContactError(
                    contactEmail,
                    "contactEmailError",
                    "Please enter your email address."
                );

                isValid = false;

            } else if (
                !emailPattern.test(contactEmail.value.trim())
            ) {

                showContactError(
                    contactEmail,
                    "contactEmailError",
                    "Please enter a valid email address."
                );

                isValid = false;

            } else {

                clearContactError(
                    contactEmail,
                    "contactEmailError"
                );

            }


            /* Subject */

            if (contactSubject.value === "") {

                showContactError(
                    contactSubject,
                    "contactSubjectError",
                    "Please select a subject."
                );

                isValid = false;

            } else {

                clearContactError(
                    contactSubject,
                    "contactSubjectError"
                );

            }


            /* Message */

            if (contactMessage.value.trim() === "") {

                showContactError(
                    contactMessage,
                    "contactMessageError",
                    "Please enter your message."
                );

                isValid = false;

            } else if (
                contactMessage.value.trim().length < 10
            ) {

                showContactError(
                    contactMessage,
                    "contactMessageError",
                    "Please enter at least 10 characters."
                );

                isValid = false;

            } else {

                clearContactError(
                    contactMessage,
                    "contactMessageError"
                );

            }


            /* Form Result */

            if (isValid) {

                contactFormMessage.className =
                    "form-message success";

                contactFormMessage.textContent =
                    "Thank you! Your message has been submitted successfully. We will get back to you soon.";

                contactForm.reset();

            } else {

                contactFormMessage.className =
                    "form-message error";

                contactFormMessage.textContent =
                    "Please correct the highlighted fields before submitting.";

            }

        });

    }


    /* ---------- Geolocation ---------- */

    const findLocationButton =
        document.getElementById("findLocation");

    const locationMessage =
        document.getElementById("locationMessage");

    const mapContainer =
        document.getElementById("mapContainer");


    if (
        findLocationButton &&
        locationMessage &&
        mapContainer
    ) {

        findLocationButton.addEventListener(
            "click",
            function () {

                if (!navigator.geolocation) {

                    locationMessage.textContent =
                        "Geolocation is not supported by your browser.";

                    return;

                }


                locationMessage.textContent =
                    "Requesting your location...";


                navigator.geolocation.getCurrentPosition(

                    function (position) {

                        const latitude =
                            position.coords.latitude;

                        const longitude =
                            position.coords.longitude;


                        locationMessage.textContent =
                            `Your location was found successfully. Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}.`;


                        const mapsUrl =
                            `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=123%20Bakery%20Street,%20Johannesburg,%20Gauteng,%20South%20Africa`;


                        mapContainer.innerHTML = `
                            <div class="map-content">
                                <span class="map-icon" aria-hidden="true">
                                    📍
                                </span>

                                <h3>Location Found</h3>

                                <p>
                                    Your current location has been detected.
                                </p>

                                <a
                                    href="${mapsUrl}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="btn btn-primary">
                                    Get Directions
                                </a>
                            </div>
                        `;

                    },

                    function (error) {

                        switch (error.code) {

                            case error.PERMISSION_DENIED:

                                locationMessage.textContent =
                                    "Location access was denied. Please allow location access and try again.";

                                break;

                            case error.POSITION_UNAVAILABLE:

                                locationMessage.textContent =
                                    "Your location could not be determined. Please try again.";

                                break;

                            case error.TIMEOUT:

                                locationMessage.textContent =
                                    "The location request timed out. Please try again.";

                                break;

                            default:

                                locationMessage.textContent =
                                    "An unexpected error occurred while finding your location.";

                        }

                    }

                );

            }
        );

    }
            /* Name validation */

            if (name.value.trim() === "") {

                showError(
                    name,
                    "nameError",
                    "Please enter your full name."
                );

                isValid = false;

            } else {

                clearError(name, "nameError");

            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email.value.trim() === "") {

                showError(
                    email,
                    "emailError",
                    "Please enter your email address."
                );

                isValid = false;

            } else if (!emailPattern.test(email.value.trim())) {

                showError(
                    email,
                    "emailError",
                    "Please enter a valid email address."
                );

                isValid = false;

            } else {

                clearError(email, "emailError");

            }


            /* Phone validation */

            const phonePattern =
                /^[0-9+\s()-]{10,15}$/;

            if (phone.value.trim() === "") {

                showError(
                    phone,
                    "phoneError",
                    "Please enter your phone number."
                );

                isValid = false;

            } else if (!phonePattern.test(phone.value.trim())) {

                showError(
                    phone,
                    "phoneError",
                    "Please enter a valid phone number."
                );

                isValid = false;

            } else {

                clearError(phone, "phoneError");

            }


            /* Occasion validation */

            if (occasion.value === "") {

                showError(
                    occasion,
                    "occasionError",
                    "Please select an occasion."
                );

                isValid = false;

            } else {

                clearError(occasion, "occasionError");

            }


            /* Flavour validation */

            if (flavour.value === "") {

                showError(
                    flavour,
                    "flavourError",
                    "Please select a cake flavour."
                );

                isValid = false;

            } else {

                clearError(flavour, "flavourError");

            }


            /* Size validation */

            if (size.value === "") {

                showError(
                    size,
                    "sizeError",
                    "Please select a cake size."
                );

                isValid = false;

            } else {

                clearError(size, "sizeError");

            }


            /* Date validation */

            if (date.value === "") {

                showError(
                    date,
                    "dateError",
                    "Please select a collection date."
                );

                isValid = false;

            } else {

                const selectedDate =
                    new Date(date.value);

                const today = new Date();

                today.setHours(0, 0, 0, 0);


                if (selectedDate < today) {

                    showError(
                        date,
                        "dateError",
                        "Please select a future collection date."
                    );

                    isValid = false;

                } else {

                    clearError(date, "dateError");

                }

            }


            /* Final form result */

            if (isValid) {

                formMessage.className =
                    "form-message success";

                formMessage.textContent =
                    "Thank you! Your custom cake enquiry has been submitted successfully. We will contact you soon.";

                cakeForm.reset();

            } else {

                formMessage.className =
                    "form-message error";

                formMessage.textContent =
                    "Please correct the highlighted fields before submitting.";

            }

        });

    }
});