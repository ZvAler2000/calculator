let display = ""
let lastOperator , newOperator;
let firstNumber, secondNumber;
let operators = ['+', '-', '*', '/'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let isOperatorChosen = false;
let isChosenAgain = false;

// lastOperator = null;
// firstNumber = 0;
// secondNumber = 0;
// result = 0;

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
    if(b != 0) {
        return a / b;
    }else {
        return "no";
    }
}


function clearAll() {
    lastOperator = null;
    newOperator = null;
    firstNumber = null;
    secondNumber = null;
    disp.textContent = 0;
}

let disp = document.getElementById("display");
disp.textContent = firstNumber;

clearAll();
let numbersButtons = document.getElementById("numbers");
let operatorButtons = document.getElementById("operators");

let buttons = document.getElementById("buttons");
function selectOperator(input) {
    if(!secondNumber) {
        lastOperator = newOperator;
        newOperator = input.textContent;
        disp.textContent = secondNumber;
        if(secondNumber === null) {
            disp.textContent = 0;
        }
    }else {
        lastOperator = newOperator;
        newOperator = input.textContent;
        let temp = operate(firstNumber, secondNumber, lastOperator);
        firstNumber = temp;
        lastOperator = 0;
        disp.textContent = firstNumber;
        isOperatorChosen = true;
    }
}

function selectOperand(input) {
    if(!newOperator) {
        if(firstNumber === null) {
            firstNumber = 0;
        }
        firstNumber *= 10;
        firstNumber += parseInt(input.textContent);
        disp.textContent = firstNumber;
    }else if(isOperatorChosen) {
        secondNumber = 0;
        secondNumber *= 10;
        secondNumber += parseInt(input.textContent);
        disp.textContent = secondNumber;
    }else {
        secondNumber *= 10;
        secondNumber += parseInt(input.textContent);
        disp.textContent = secondNumber;
    }
}

function operate(a,b,operator) {
    switch(operator) {
        case operators[0]:
            return add(a,b);
        case operators[1]:
            return subtract(a,b);
        case operators[2]:
            return multiply(a,b);
        case operators[3]:
            return divide(a,b);
    }
}

buttons.addEventListener("click", (event) => clickButton(event));

function clickButton(input) {
    switch(input.target.id) {
        case 'operators':
            selectOperator(input.target);
            break;
        case 'numbers':
            selectOperand(input.target);
            break;
        case 'clear':
            clearAll();
            break;
        case 'equals':
            if(newOperator) {
                disp.textContent = operate(firstNumber,secondNumber,newOperator);
            }
            break;
    }
}