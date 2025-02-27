let display = ""
let lastOperator = `+`;
let firstNumber, secondNumber;

firstNumber = 1;
secondNumber = 3;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let disp = document.getElementById("display");
disp.textContent = firstNumber + lastOperator + secondNumber;
