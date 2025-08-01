document.addEventListener('DOMContentLoaded', () =>{

    const isMobile = window = window.innerWidth <= 1025;
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
createObserver('#about .phrase', { root: null, threshold: isMobile ? 0.5 : 1}, 'active');
createObserver('#gallery .image-box', { root: null, threshold: isMobile ? 0 : 0.3}, 'active');
createObserver('#blog .featured-article, #blog .article', { root: null, threshold: isMobile ? 0 : 0.3}, 'fadeInUp');
createObserver('#contact > div', { root: null, threshold: isMobile ? 0 : 0.7}, 'fadeInUp');
});




/*----------Navigation---------*/ 
const nav = document.getElementById('nav');
const menuIcon = document.getElementsByClassName('menu')[0];
const listItems = document.querySelectorAll('#nav ul li a');



function toggleMenu() {
    nav.classList.toggle("active")
    menuIcon.classList.toggle("active");
    listItems.forEach((listItems) => {
    listItems.classList.toggle('active');
    });
}

function hideMenu() {
    
    
    nav.classList.remove("active");
    menuIcon.classList.remove("active");
    for (item of listItems) {
        item.classList.remove("active");
    }
}

//Form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = this;
    const formData =new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            form.reset();
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show');},10000);
        } else {
            // Handle error here
            alert('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error', error);
    })
})