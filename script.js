// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        response.textContent = "⚠️ Please fill in all required fields.";
        response.style.color = "red";
      } else {
        response.textContent = "✅ Thank you, " + name + "! Your message has been sent.";
        response.style.color = "green";
        form.reset();
      }
    });
  }
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav ul");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "☰ Menu";
  toggleBtn.classList.add("menu-toggle");

  document.querySelector("nav").insertBefore(toggleBtn, nav);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});
