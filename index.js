const calDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.querySelector('#clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    //Replace current display value if first value entered
    if (awaitingNextValue) {
        calDisplay.textContent = number;
        awaitingNextValue = false;
    }
    else {
        const displayValue = calDisplay.textContent;
        calDisplay.textContent = displayValue === '0' ? number : displayValue + number;

    }
}

function addDecimal() {
    //if operatorpressed,dont add decimal
    if (awaitingNextValue)
        return;
    //if no decimal add one
    if (!calDisplay.textContent.includes('.'))
        calDisplay.textContent = `${calDisplay.textContent}.`;
}

function useOperator(operator) {
    const currentValue = Number(calDisplay.textContent);
    //Assign firstValue if no value
    if (!firstValue)
        firstValue = currentValue;

    else
        console.log(currentValue);
    awaitingNextValue = true;
    operatorValue = operator;
    console.log(firstValue);
    console.log(operatorValue);
}
//Adding event listerner

inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0)
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    else if (inputBtn.classList.contains('operator'))
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    else if (inputBtn.classList.contains('decimal'))
        inputBtn.addEventListener('click', () => addDecimal());

});

//Reset all Dispplay
function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calDisplay.textContent = '0';
}

//Event Listener
clearBtn.addEventListener('click', resetAll);