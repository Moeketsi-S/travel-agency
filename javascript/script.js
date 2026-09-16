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