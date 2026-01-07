// ===============================
// NAVBAR & HAMBURGER MENU
// ===============================
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  navbarNav.classList.toggle("active");
});

// klik di luar navbar → navbar tertutup
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ===============================
// FEATHER ICONS
// ===============================
feather.replace();

// ===============================
// SMOOTH SCROLL NAVIGATION
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      navbarNav.classList.remove("active");
    }
  });
});

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// MENU CARD HOVER EFFECT (JS)
// ===============================
const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hover");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover");
  });
});

// ===============================
// CONTACT FORM VALIDATION
// ===============================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    let valid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (valid) {
      alert("Pesan berhasil dikirim. Terima kasih 😊");
      form.reset();
    } else {
      alert("Mohon lengkapi semua data.");
    }
  });
}

// ===============================
// FOOTER YEAR AUTO UPDATE
// ===============================
const credit = document.querySelector(".credit span");
if (credit) {
  credit.textContent = new Date().getFullYear();
}
