const toggleSwitch = document.querySelector('input[type="checkbox"]');
const Body = document.querySelector('body');
const toggleIcon = document.getElementById('toggle-icon');
const Operator = document.getElementsByClassName('operator');
const Equal = document.getElementsByClassName('equal-sign');
const Display = document.getElementsByClassName('calculator-display');
const WholeDisplay = document.getElementsByClassName('calculator');
const Clear = document.getElementsByClassName('clear');
function darkMode() {
    toggleIcon.children[0].classList.remove('fa-sun');
    toggleIcon.children[0].classList.add('fa-moon');
    Body.style.background = 'linear-gradient(to right, #232526, #414345)';
    for (var i = 0; i < 4; i++) {
        Operator[i].style.background = 'rgb(150, 65, 255)';
    }
    Equal[0].style.background = '#03dac5';
    Display[0].style.background = 'linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.3))';
    WholeDisplay[0].style.background = 'linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.3))';
    Clear[0].style.background = '#cf6679';
}


function lightMode() {
    toggleIcon.children[0].classList.remove('fa-moon');
    toggleIcon.children[0].classList.add('fa-sun');
    Body.style.background = 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)';
    for (var i = 0; i < 4; i++) {
        Operator[i].style.background = 'grey';
    }
    Equal[0].style.background = '#18b554';
    Display[0].style.background = 'white';
    WholeDisplay[0].style.background = 'white';
    Clear[0].style.background = 'rgb(255, 40, 40)';
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
