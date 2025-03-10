let display = ""
let lastOperator , newOperator;
let firstNumber, secondNumber;
let operators = ['+', '-', '*', '/'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let isOperatorChosen = false;
let isNewOp = false;

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
    isOperatorChosen = false;
    disp.textContent = 0;
}

let disp = document.getElementById("display");
disp.textContent = firstNumber;

clearAll();

let buttons = document.getElementById("buttons");
buttons.addEventListener("click", (event) => clickButton(event));

let html = document.querySelector("body");
html.addEventListener("click", (event) => {
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(lastOperator);
    console.log(newOperator);
    console.log(isOperatorChosen);
})

function selectOperator(input) {
    if(!secondNumber) {
        console.log("PING!")
        lastOperator = newOperator;
        newOperator = input.textContent;
        disp.textContent = secondNumber;
        if(secondNumber === null) {
            disp.textContent = 0;
        }
        isOperatorChosen = true;
    }else {
        lastOperator = newOperator;
        newOperator = input.textContent;
        if(isOperatorChosen) {
            let temp = operate(firstNumber, secondNumber, lastOperator);
            firstNumber = temp;
        }
        secondNumber = 0;
        disp.textContent = firstNumber;
        isOperatorChosen = true;
        isNewOp = false;
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
        if(!isNewOp) {
            secondNumber = 0;
        }
        secondNumber *= 10;
        secondNumber += parseInt(input.textContent);
        disp.textContent = secondNumber;
        isNewOp = true;
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
                firstNumber = operate(firstNumber,secondNumber,newOperator);
                disp.textContent = firstNumber;
                isOperatorChosen = false;
            }
            break;
    }
}