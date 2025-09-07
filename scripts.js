// scripts.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar toggle for mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
}

// Contact form thank-you modal
const contactForm = document.querySelector("form");
const thankYouModal = document.getElementById("thankYouModal");
const closeModal = document.getElementById("closeModal");

if (contactForm && thankYouModal && closeModal) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    contactForm.reset();
    thankYouModal.classList.remove("hidden");
    thankYouModal.classList.add("flex");
  });

  closeModal.addEventListener("click", function() {
    thankYouModal.classList.remove("flex");
    thankYouModal.classList.add("hidden");
  });

  thankYouModal.addEventListener("click", function(e) {
    if (e.target === thankYouModal) {
      thankYouModal.classList.remove("flex");
      thankYouModal.classList.add("hidden");
    }
  });
}

// Donation thank-you modal
const donationModal = document.getElementById("donationModal");
const continueDonate = document.getElementById("continueDonate");

document.querySelectorAll(".btn-donate").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (donationModal) {
      donationModal.classList.remove("hidden");
      donationModal.classList.add("flex");
    }
  });
});

if (continueDonate) {
  continueDonate.addEventListener("click", function() {
    donationModal.classList.remove("flex");
    donationModal.classList.add("hidden");
    // Redirect to PayPal
    window.location.href = "https://paypal.me/helpforliving747";
  });
}
