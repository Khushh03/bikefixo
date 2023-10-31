let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar-brand img")

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove("full")
    } else {
        navbar.classList.add("full")
    }
    prevScrollPos = currentScrollPos;
};