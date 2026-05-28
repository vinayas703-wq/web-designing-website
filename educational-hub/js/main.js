document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Set active link based on current URL
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  
  links.forEach(link => {
    if (link.getAttribute('href') && currentPath.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  // Optional: Form validation alert for Contact page
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
