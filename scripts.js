// Operations
function addition(a, b){
    return a + b
}

function subtraction(a, b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide (a,b){
    return a / b
}

function operate ( operator, a, b){
    if (operator == 1){
        return addition(a, b)
    } else if (operator == 2){
        return subtraction(a,b)
    } else if (operator == 3 ) {
        return multiply(a, b)
    }else if (operator == 4) {
        return divide(a,b)
    }
}

let startingNumber = 0;
let displayNumber = 0;
let buttons = document.querySelectorAll("input[type=button]");
console.log(buttons.length)

function numberPress(val){
    displayNumber = startingNumber + val
}
document.getElementById('display').innerHTML = displayNumber;