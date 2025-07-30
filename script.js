/*----------Navigation---------*/ 
const nav = document.getElementById('nav');
console.log(nav)
const menuIcon = document.getElementsByClassName('menu')[0];
console.log(menuIcon)
function toggleMenu() {
    nav.classList.toggle("active")
    menuIcon.classList.toggle("active");
}

function hideMenu() {
    nav.classList.remove("active");
    menuIcon.classList.remove("active");
}