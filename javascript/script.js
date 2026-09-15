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

});