// DARK MODE TOGGLE
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  toggle?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  });

  // MOBILE MENU TOGGLE
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle?.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
  });

  // FAQ TOGGLE
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question?.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });

  // SCROLL TO TOP
  const scrollBtn = document.getElementById("scroll-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // PAGE LOADER (optional)
  const loader = document.getElementById("page-loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1000); // adjust delay as needed
  }
});
