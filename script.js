const themeSwitcher = document.getElementById('theme-switcher');

//Update Theme Icon and Text

const updateThemeIcon = (isDarkMode) => {
    themeSwitcher.children[0].textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    themeSwitcher.children[1].classList.replace(isDarkMode ? 'fa-sun': 'fa-moon', isDarkMode ? 'fa-moon' : 'fa-sun' )
}

//Determine if dark mode is prfefered
function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
}

// Set the theme based on the preference
function setThemeBasedOnPrference() {
 const isDarkMode = prefersDarkMode();
 document.documentElement.setAttribute('data-theme',isDarkMode ? 'dark' : 'light');
 updateThemeIcon(isDarkMode);
}

//Switch theme 
switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light': 'dark';
    document.documentElement.setAttribute('data-theme',newTheme);
    localStorage.setItem('theme',newTheme);
    updateThemeIcon(newTheme === 'dark');
}


//Event Listener 
themeSwitcher.addEventListener('click', switchTheme)

//Check Local Storage For Theme 
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    }
    else {
        setThemeBasedOnPrference();
    }
}

//Listen for system theme changes
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', setThemeBasedOnPrference)

//Initialize theme when the script loads
initializeTheme();



/*
const currentThemeFromLocalStorage = localStorage.getItem('theme');
if(currentThemeFromLocalStorage) {
    document.documentElement.setAttribute('data-theme',currentThemeFromLocalStorage)
    if(currentThemeFromLocalStorage === 'dark') {
        darkMode();
    }
    else {
        lightMode();
    }
}*/

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