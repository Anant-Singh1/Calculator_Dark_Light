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
//Calculate first and second values depending upon operator

const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
};

function useOperator(operator) {
    const currentValue = Number(calDisplay.textContent);
    //Prevent multiple operator
    if (operatorValue && awaitingNextValue) {
        operatorValue = operator;
        return;
    }
    //Assign firstValue if no value
    if (!firstValue)
        firstValue = currentValue;

    else {
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calDisplay.textContent = calculation;
        firstValue = calculation;
    }
    awaitingNextValue = true;
    operatorValue = operator;

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