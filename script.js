const btnContainer = document.querySelector('.btns-container');


const buttons = document.querySelectorAll('.btn');
const numbers = document.querySelectorAll('[data-type="number"]');
const operators = document.querySelectorAll('[data-type="operator"]');
const cancelBtn = document.getElementById('ac');
const backspaceBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');
const dotBtn = document.getElementById('dot');

buttons.forEach(btn => btn.addEventListener('click', function(e){
    console.log(e.target);
}));


