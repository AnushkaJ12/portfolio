// Animate sections when they scroll into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.section, .profile-section, .card').forEach(elem => {
    observer.observe(elem);
});

// Hover sound effect
const hoverSound = new Audio('hover.mp3'); // Put hover.mp3 in the same folder

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});

// Toggle light/dark mode for fun
const toggleButton = document.createElement('button');
toggleButton.innerText = "Toggle Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "8px";
toggleButton.style.backgroundColor = "#ffaa00";
toggleButton.style.color = "#000";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

let isDark = true;
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    isDark = !isDark;
    toggleButton.innerText = isDark ? "Switch to Light" : "Switch to Dark";
});

// Click highlight for LinkedIn/GitHub cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('clicked');
        setTimeout(() => card.classList.remove('clicked'), 300);
    });
});
