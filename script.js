const btnContainer = document.querySelector('.btns-container');


const buttons = document.querySelectorAll('.btn');
const numbers = document.querySelectorAll('[data-type="number"]');
const operators = document.querySelectorAll('[data-type="operator"]');
const cancelBtn = document.getElementById('ac');
const backspaceBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');
const dotBtn = document.getElementById('dot');

const userInput = document.querySelector('.user-input');

numbers.forEach(num =>
  num.addEventListener('click', () => appendNum(num.textContent))
)

//BUTTON EVENT LISTENERS
cancelBtn.addEventListener('click', resetInput);
dotBtn.addEventListener('click', useDot);
backspaceBtn.addEventListener('click', backspace);


//BUTTON FUNCTIONS
function appendNum(num){
    if(userInput.textContent === '0'){
        console.log(true);
        resetInput();
    }
    userInput.textContent += num;
}

function resetInput(){
    userInput.textContent = '';
}

function useDot(){
    if (userInput.textContent === ''){
        userInput.textContent = '0';
    }
    if (userInput.textContent.includes('.')){
        return
    }  
    userInput.textContent += '.'
}

function backspace() {
    userInput.textContent = userInput.textContent
      .toString()
      .slice(0, -1)
  }

buttons.forEach(btn => btn.addEventListener('click', function(e){
    console.log(e.target);
}));


