"use strict";

const hamburgerEl = document.querySelector(".header__hamburger-menu");
const headerMenuEl = document.querySelector(".header__menu");

// Animate hamburger menu
hamburgerEl.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("active");
    headerMenuEl.classList.toggle("active");
});

// Detect click outside to hide menu
document.addEventListener("click", function (e) {
    if (!e.target.closest(".header__column:last-child")) {
        hamburgerEl.classList.remove("active");
        headerMenuEl.classList.remove("active");
    }
});
