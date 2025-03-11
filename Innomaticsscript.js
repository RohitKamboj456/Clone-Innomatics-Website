// JavaScript for interactivity and functionality

document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully");
    addSmoothScroll();
    setupTestimonialSlider();
    setupMobileMenu();
});

// Smooth Scrolling Function
function addSmoothScroll() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
}

// Testimonial Slider
function setupTestimonialSlider() {
    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    function showTestimonial() {
        testimonials.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % testimonials.length;
    }
    showTestimonial();
    setInterval(showTestimonial, 3000);
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const menuButton = document.createElement("button");
    menuButton.textContent = "☰";
    menuButton.classList.add("mobile-menu-button");
    document.querySelector("header").appendChild(menuButton);
    
    const nav = document.querySelector("nav ul");
    menuButton.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
}

// Hero Section Alert Function
function showAlert() {
    alert("Welcome to Innomatics! Start your learning journey now.");
}