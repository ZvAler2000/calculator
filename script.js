let display = ""
let lastOperator , newOperator;
let firstNumber, secondNumber, result;
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
    return a / b;
}


function clearAll() {
    lastOperator = null;
    newOperator = null;
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    disp.textContent = result;
}

let disp = document.getElementById("display");
disp.textContent = firstNumber;

clearAll();
let numbersButtons = document.getElementById("numbers");
let operatorButtons = document.getElementById("operators");



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

    // if(operators.includes(input)) {
    //     if(!isOperatorChosen) {
    //         lastOperator = newOperator;
    //         newOperator = input
    //         isOperatorChosen = true;
    //         secondNumber = 0;
    //         disp.textContent = secondNumber;
    //     }else {
    //         switch(lastOperator) {
    //             case operators[0]:
    //                 result = firstNumber + secondNumber;
    //                 disp.textContent = result;
    //                 firstNumber = result;
    //                 break;
    //             case operators[1]:
    //                 result = firstNumber - secondNumber;
    //                 disp.textContent = result;
    //                 firstNumber = result;
    //                 break;
    //             case operators[2]:
    //                 result = firstNumber * secondNumber;
    //                 disp.textContent = result;
    //                 firstNumber = result;
    //                 break;
    //             case operators[3]:
    //                 result = firstNumber / secondNumber;
    //                 disp.textContent = result;
    //                 firstNumber = result;
    //                 break;
    //         }
    //     }
    // }

    // if(input == 'CE') {
    //     firstNumber = 0;
    //     secondNumber = 0;
    //     result = 0;
    //     isOperatorChosen = false;

    //     disp.textContent = firstNumber;
    // }

    // if(input == '=') {
    //     disp.textContent = operate(firstNumber, secondNumber, newOperator);
    // }
}

function selectOperator(input) {
    lastOperator = newOperator;
    newOperator = input.textContent;
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