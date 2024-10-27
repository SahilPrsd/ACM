document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});