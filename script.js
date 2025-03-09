document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.onclick = function () {
        navLinks.classList.toggle('active');
    };
});