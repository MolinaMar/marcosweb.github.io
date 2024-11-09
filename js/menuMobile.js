hamburguer = document.querySelector(".hamburguer");
hamburguer.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    if (!navBar.contains(event.target) && !hamburguer.contains(event.target)) {
        navBar.classList.remove("active");
    }
});