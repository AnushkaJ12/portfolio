// Fade-in effect on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Optional: hover sound
// const hoverSound = new Audio('hover.mp3');
// document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('mouseenter', () => {
//         hoverSound.currentTime = 0;
//         hoverSound.play();
//     });
// });

