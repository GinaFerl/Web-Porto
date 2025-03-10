document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const githubButton = document.querySelector('.visit-btn');

    menuIcon.onclick = function () {
        navLinks.classList.toggle('active');
    };
    githubButton.onclick = function () {
        window.open("https://github.com/GinaFerl", "_blank"); 
    };
});