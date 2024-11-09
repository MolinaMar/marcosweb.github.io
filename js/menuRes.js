// menuRes.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });
});
