let display = ""
let lastOperator = '+';
let firstNumber, secondNumber, result;
let operators = ['+', '-', '*', '/'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let isOperatorChosen = false;

firstNumber = 0;
secondNumber = 0;
result = 0;

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
disp.textContent = firstNumber;

let buttons = document.getElementById("buttons");
buttons.addEventListener("click", (event) => loadValue(event.target.textContent));

function loadValue(input) {
    if(numbers.includes(parseInt(input)) && !isOperatorChosen) {
        firstNumber *= 10;
        firstNumber += parseInt(input);

        disp.textContent = firstNumber;
    }

    if(numbers.includes(parseInt(input)) && isOperatorChosen) {
        secondNumber *= 10;
        secondNumber += parseInt(input);

        disp.textContent = secondNumber;
    }

    if(operators.includes(input)) {
        lastOperator = input;
        isOperatorChosen = true;
        secondNumber = 0;
        disp.textContent = secondNumber;
    }

    if(input == 'CE') {
        firstNumber = 0;
        secondNumber = 0;
        result = 0;
        isOperatorChosen = false;

        disp.textContent = firstNumber;
    }

    if(input == '=') {
        switch(lastOperator) {
            case operators[0]:
                result = firstNumber + secondNumber;
                disp.textContent = result;
                firstNumber = result;
                // console.log(result);
                // console.log(firstNumber);
                // console.log(secondNumber);
                break;
            case operators[1]:
                result = firstNumber - secondNumber;
                disp.textContent = result;
                firstNumber = result;
                break;
            case operators[2]:
                result = firstNumber * secondNumber;
                disp.textContent = result;
                firstNumber = result;
                break;
            case operators[3]:
                result = firstNumber / secondNumber;
                disp.textContent = result;
                firstNumber = result;
                break;
        }
    }
}

function operate(a,b,operator) {
    switch(operator) {
        case operators[0]:
            return a + b;
        case operators[1]:
            return a - b;
        case operators[2]:
            return a * b;
        case operators[3]:
            return a / b;
    }
}

console.log(operate(1, 2, '/'));