const calDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.querySelector('#clear-btn');

function sendNumberValue(number) {
    const displayValue = calDisplay.textContent;
    calDisplay.textContent = displayValue === '0' ? number : displayValue + number;

}
function addDecimal() {
    if (!calDisplay.textContent.includes('.'))
        calDisplay.textContent = `${calDisplay.textContent}.`;
}

//Adding event listerner

inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0)
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    else if (inputBtn.classList.contains('operator'))
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    else if (inputBtn.classList.contains('decimal'))
        inputBtn.addEventListener('click', () => addDecimal());

});

//Reset Dispplay
function resetAll() {
    calDisplay.textContent = '0';
}

//Event Listener
clearBtn.addEventListener('click', resetAll);