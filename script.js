document.addEventListener('DOMContentLoaded', () =>{
    //Function to create and obser Intersection Observers
    function createObserver(selector, observerOptions, toggleClass){
        const items = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry=> {
                if (entry.isIntersecting) {
                    entry.target.classList.add(toggleClass);
                }
                else {
                    entry.target.classList.remove(toggleClass);
                }
            });
        }, observerOptions)

    items.forEach(item => {
        observer.observe(item);
        });
    }

    //Create observers for diferent sections
createObserver('#about .phrase', { root: null, threshold: 1}, 'active');
createObserver('#gallery .image-box', { root: null, threshold: 0.5}, 'active');
createObserver('#blog .featured-article, #blog .article', { root: null, threshold: 0.3}, 'fadeInUp');
createObserver('#contact > div', { root: null, threshold: 0.7}, 'fadeInUp');
});




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