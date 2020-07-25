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
  return num1 / num2;
}

function operate(operation, num1, num2) {
  switch(operation) {
    case 'add':
      return add(num1, num2);
    case 'subtract':
      return subtract(num1, num2);
    case 'multiply':
      return multiply(num1, num2);
    case 'divide':
      return divide(num1, num2);
    default:
      alert('Invalid operation');
  }
}

function numInput(num) {
  currentValue += num.toString();
  currentValue = Number(currentValue);
  updateScreen();
}

function updateScreen() {
  if (currentValue.toString().length > 9) {
    currentValue = Number(currentValue.toString().slice(0, 9));
  }
  const screen = document.querySelector('#screen');
  screen.textContent = currentValue;
}

const numButtons = document.querySelectorAll('.number');
numButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    numInput(btn.dataset.value);
  })
})

const opButtons = document.querySelectorAll('.op');
opButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    console.log(`You clicked ${btn.dataset.value}`);
  })
})

let memory = 0;
let currentValue = 0;

updateScreen();