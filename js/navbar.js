const navlinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});