const toggleSwitch = document.querySelector('input[type="checkbox"]');
const Body = document.querySelector('body');
const toggleIcon = document.getElementById('toggle-icon');

function darkMode() {
    // toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[0].classList.remove('fa-sun');
    toggleIcon.children[0].classList.add('fa-moon');
    Body.style.background = 'linear-gradient(to right, #000000, #434343)';
}

function lightMode() {

    // toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[0].classList.remove('fa-moon');
    toggleIcon.children[0].classList.add('fa-sun');
    Body.style.background = 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)';
}

//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        // document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}






//Event listner
toggleSwitch.addEventListener('change', switchTheme);
