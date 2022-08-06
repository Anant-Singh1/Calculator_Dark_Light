const toggleSwitch = document.querySelector('input[type="checkbox"]');
const Body = document.querySelector('body');
const toggleIcon = document.getElementById('toggle-icon');
const Operator = document.getElementsByClassName('operator');

function darkMode() {
    toggleIcon.children[0].classList.remove('fa-sun');
    toggleIcon.children[0].classList.add('fa-moon');
    Body.style.background = 'linear-gradient(to right, #000000, #434343)';
    for (var i = 0; i < 4; i++) {
        Operator[i].style.background = 'rgb(150, 65, 255)';
    }
}

function lightMode() {
    toggleIcon.children[0].classList.remove('fa-moon');
    toggleIcon.children[0].classList.add('fa-sun');
    Body.style.background = 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)';
    for (var i = 0; i < 4; i++) {
        Operator[i].style.background = 'grey';
    }
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
