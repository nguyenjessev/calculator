function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    alert(`You can't divide by zero!`);
    return;
  }
  return num1 / num2;
}

function operate(operation, num1, num2) {
  let result = 0;
  switch(operation) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'subtract':
      result = subtract(num1, num2);
      break;
    case 'multiply':
      result =  multiply(num1, num2);
      break;
    case 'divide':
      result = divide(num1, num2);
      break;
    default:
      alert('Invalid operation');
  }

  if(!result) {
    clear();
    return;
  }
  result = Math.min(result, 999999999);
  currentValue = result;
  pendingOperation = '';
  updateScreen();
}

function numInput(num) {
  currentValue += num.toString();
  currentValue = Number(currentValue);
  updateScreen();
}

function updateScreen(value) {
  if (currentValue.toString().length > 9) {
    currentValue = Number(currentValue.toString().slice(0, 9));
  }
  const screen = document.querySelector('#screen');
  screen.textContent = currentValue;
}

function clear() {
  memory = 0;
  currentValue = 0;
  pendingOperation = '';
  updateScreen();
}

function backspace() {
  let result = currentValue.toString();
  result = result.slice(0, result.length-1);
  if (result === '') result = 0;
  currentValue = Number(result);
  updateScreen();
}

function addDecimal() {
  let result = currentValue + '.';
  if (isNaN(result)) result = currentValue;
  currentValue = result;
  updateScreen();
}

const numButtons = document.querySelectorAll('.number');
numButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    numInput(btn.dataset.value);
  });
});

const opButtons = document.querySelectorAll('.op');
opButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    if (pendingOperation) {
      operate(pendingOperation, memory, currentValue);
    }
    pendingOperation = btn.dataset.value;
    memory = currentValue;
    currentValue = 0;
  });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', e => {
  clear();
});

const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', e => {
  backspace();
})

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', e => {
  addDecimal();
});

const equalsButton = document.querySelector('#enter');
equalsButton.addEventListener('click', e => {
  if (pendingOperation) {
    if (currentValue !== 0) operate(pendingOperation, memory, currentValue);
  }
});

let memory = 0;
let currentValue = 0;
let pendingOperation = '';

updateScreen();