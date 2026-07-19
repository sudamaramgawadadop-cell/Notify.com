// ===============================
// Mobile Navbar Toggle
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ===============================
// Close Menu After Clicking Link
// ===============================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    }
});

// ===============================
// Fade Animation for Cards
// ===============================

const cards = document.querySelectorAll(".card, .course-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});

// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", () => {
    console.log("Welcome to Xstar 🚀");
});