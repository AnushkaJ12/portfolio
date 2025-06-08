// Animate fade-in sections on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', () => {
  checkFade();

  // Animate skill boxes with a pop effect
  document.querySelectorAll('.skill-box').forEach((skill, index) => {
    setTimeout(() => {
      skill.style.transform = 'translateY(0)';
      skill.style.opacity = '1';
    }, index * 150);
  });
});

// Scroll to top button logic
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


