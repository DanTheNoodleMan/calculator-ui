const btnContainer = document.querySelector('.btns-container');


const numbers = document.querySelectorAll('[data-type="number"]');
const operators = document.querySelectorAll('[data-type="operator"]');
const acBtn = document.getElementById('ac');
const backspaceBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');
const dotBtn = document.getElementById('dot');

const lastOpScreen = document.querySelector('.last-op');
const currentOpScreen = document.querySelector('.current-op');


let operand1 = '';
let operand2 = '';
let operator = null;

let needToReset = false;
//BUTTON EVENT LISTENERS

numbers.forEach(num => num.addEventListener('click', () => appendNum(num.textContent)))
operators.forEach(op => op.addEventListener('click', () => setOperator(op)))

acBtn.addEventListener('click', ac);
dotBtn.addEventListener('click', useDot);
backspaceBtn.addEventListener('click', backspace);
equalsBtn.addEventListener('click', myEval);


//BUTTON FUNCTIONS
function appendNum(num){
    if(currentOpScreen.textContent === '0' || needToReset){
        console.log(true);
        resetInput();
    }
    currentOpScreen.textContent += num;
}

function resetInput(){
    currentOpScreen.textContent = '';
    needToReset = false;
}

function ac(){
    operand1='';
    operand2='';
    operator = null;
    lastOpScreen.textContent = '';
    currentOpScreen.textContent = '';
}

function useDot(){
    if (currentOpScreen.textContent === ''){
        currentOpScreen.textContent = '0';
    }
    if (currentOpScreen.textContent.includes('.')){
        return
    }  
    currentOpScreen.textContent += '.'
}

function backspace() {
    currentOpScreen.textContent = currentOpScreen.textContent
      .toString()
      .slice(0, -1)
  }


function setOperator(op){
    if(operator !== null) myEval();
    operand1 = currentOpScreen.textContent;
    operator = op.classList[0];
    opSymbol = translateOperator(operator);
    lastOpScreen.textContent = `${operand1} ${opSymbol}`;
    needToReset = true;
}


function translateOperator(op){
    switch(op){
        case 'plus':
            return '+';
        case 'minus':
            return '-';
        case 'multiply':
            return '×';
        case 'division':
            return '÷';
        case 'percentage':
            return '%';
        default:
            return null;
    }
}
//Operation functions

function myEval(){
    if(operator === null || needToReset) return;
    
    operand2 = currentOpScreen.textContent;
    currentOpScreen.textContent = operation(operator, operand1, operand2);
    lastOpScreen.textContent = `${operand1} ${translateOperator(operator)} ${operand2} =`;
    operator = null;
    needToReset =  true;
}

function sum(a,b){
    return a + b;
}

function minus(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if(b == 0) return null;
    else return a / b;
}

function percentage(a,b){
    return (100*a) / b;
}

function operation(op, a, b){
    a = Number(a);
    b = Number(b);
    switch(op){
        case 'plus':
            return sum(a,b);
        case 'minus':
            return minus(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'division':
            return divide(a,b);
        case 'percentage':
            return percentage(a,b);
        default:
            return null;
    }
}

