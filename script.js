let display = ""
let lastOperator = '+';
let firstNumber, secondNumber, result;
let operators = ['+', '-', '*', '/'];
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
    if(parseInt(input) >= 0 && parseInt(input) < 10 && !isOperatorChosen) {
        firstNumber *= 10;
        firstNumber += parseInt(input);

        disp.textContent = firstNumber;
    }

    if(parseInt(input) >= 0 && parseInt(input) < 10 && isOperatorChosen) {
        secondNumber *= 10;
        secondNumber += parseInt(input);

        disp.textContent = secondNumber;
    }

    if(operators.includes(input)) {
        lastOperator = input;
        isOperatorChosen = true;
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
            case '+':
                result = add(firstNumber,secondNumber);
                disp.textContent = "";
                disp.textContent = result;
                console.log(result);
            case '-':
                result = subtract(firstNumber,secondNumber);
                disp.textContent = result;
            case '*':
                result = multiply(firstNumber,secondNumber);
                disp.textContent = result;
            case '/':
                result = divide(firstNumber,secondNumber);
                disp.textContent = result;
        }

    }

    console.log(lastOperator);
}