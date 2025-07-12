"use strict";

const headerEl = document.querySelector(".header");
const hamburgerEl = document.querySelector(".header__hamburger-menu");
const headerMenuEl = document.querySelector(".header__menu");
const backToTopBtn = document.querySelector(".back-to-top");

// ================================================================================================

// Animate hamburger menu
hamburgerEl.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("active");
    headerMenuEl.classList.toggle("active");
    headerEl.classList.toggle("active");
});

// ================================================================================================

// Detect click outside menu to hide menu
document.addEventListener("click", function (e) {
    if (!e.target.closest(".header__column:last-child")) {
        hamburgerEl.classList.remove("active");
        headerMenuEl.classList.remove("active");
        headerEl.classList.remove("active");
    }
});

// ================================================================================================

// Listen to scroll event
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        headerEl.classList.add("white");
    } else {
        headerEl.classList.remove("white");
    }

    if (window.scrollY > window.innerHeight) {
        backToTopBtn.classList.remove("invisible");
    } else {
        backToTopBtn.classList.add("invisible");
    }
});

// ================================================================================================

// Scroll to top
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// ================================================================================================

// Listen to screen width change
window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        document.querySelector(".footer").addEventListener("click", toggleFooterColumns);
    }
});

if (window.innerWidth < 768) {
    document.querySelector(".footer").addEventListener("click", toggleFooterColumns);
}

function toggleFooterColumns(e) {
    const clickedEl = e.target;
    if (!clickedEl.closest(".footer__top-column-title")) return;
    document
        .querySelectorAll(".footer__top-column-title")
        .forEach((el) => el.classList.remove("footer__top-column-title--opened"));
    clickedEl.closest(".footer__top-column-title").classList.add("footer__top-column-title--opened");
    document.querySelectorAll(".footer__top-column-list").forEach((el) => (el.style.display = "none"));
    clickedEl.closest(".footer__top-column-title").nextElementSibling.style.display = "block";
}
