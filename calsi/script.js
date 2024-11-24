let display = document.getElementById("display");

function clearDisplay() {
  display.innerText = '';
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
}

function appendNumber(number) {
  display.innerText += number;
}

function appendOperator(operator) {
  const lastChar = display.innerText.charAt(display.innerText.length - 1);
  if ('+-*/'.includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1);
  }
  display.innerText += operator;
}

function appendDot() {
  if (display.innerText.length === 0) {
    display.innerText = '0.';
  } else if (!display.innerText.includes('.')) {
    display.innerText += '.';
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText).toString();
  } catch (e) {
    display.innerText = 'Error';
  }
}

function squareNumber() {
  let currentValue = display.innerText;
  if (currentValue) {
    let result = Math.pow(parseFloat(currentValue), 2);
    display.innerText = result;
  }
}
