const resultElement = document.getElementById('result');
const input1        = document.getElementById('input1');
const input2        = document.getElementById('input2');

const submitButton = document.getElementById('submit');
const plusButton   = document.getElementById('plus');
const minusButton  = document.getElementById('minus');

let action = '+';

function printResult(value) {
    value >= 0 ? resultElement.style.color = 'green' : resultElement.style.color ='red';
    
    resultElement.textContent = value;
}

const setAction = (newAction) => {
    action = newAction;
};

plusButton.onclick = () => setAction('+');
minusButton.onclick = () => setAction('-');

const calculateResult = () => {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const sum    = (action === '+') ? value1 + value2 : value1 - value2;
    printResult(sum);

};

submitButton.onclick = calculateResult;